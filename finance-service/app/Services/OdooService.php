<?php

namespace App\Services;

use App\Models\Disbursement;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\IntegrationLog;

class OdooService
{
    public function buildPayload(Disbursement $disbursement): array
    {
        $disbursement->load('details');

        return [
            'batch_id' => $disbursement->batch_id,
            'program_id' => $disbursement->program_id,
            'total_amount' => (float) $disbursement->total_amount,
            'approved_by' => (string) $disbursement->approved_by,

            'disbursement_details' => $disbursement->details
                ->map(function ($detail) {
                    return [
                        'institution_code' => $detail->institution_code,
                        'institution_name' => $detail->institution_name,
                        'amount' => (float) $detail->amount,
                        'account_number' => $detail->account_number,
                        'bank_name' => $detail->bank_name,
                    ];
                })
                ->values()
                ->toArray(),
        ];
    }

    public function sendToOdoo(Disbursement $disbursement): void
    {
        $payload = $this->buildPayload($disbursement);

        try {
    
            $response = Http::timeout(10)->post(
                config('services.odoo.url') . '/api/odoo/disbursement',
                $payload
            );

            if ($response->successful()) {
                IntegrationLog::create([
                    'service' => 'odoo',
                    'action' => 'disbursement',
                    'batch_id' => $disbursement->batch_id,
                    'status' => 'SUCCESS',
                    'http_status' => $response->status(),
                    'message' => 'Payload berhasil dikirim ke Odoo',
                    'payload' => $payload,
                    'response' => $response->json(),
                ]);

                Log::info('Response Odoo', [
                    'status' => $response->status(),
                    'body' => $response->json(),
                ]);

                return;
            }

            IntegrationLog::create([
                'service' => 'odoo',
                'action' => 'disbursement',
                'batch_id' => $disbursement->batch_id,
                'status' => 'FAILED',
                'http_status' => $response->status(),
                'message' => 'Odoo mengembalikan error',
                'payload' => $payload,
                'response' => $response->json(),
            ]);

            throw new \Exception(
                'Odoo gagal menerima payload. HTTP status: ' . $response->status()
            );

        } catch (\Throwable $e) {

  
            if (!isset($response)) {
                IntegrationLog::create([
                    'service' => 'odoo',
                    'action' => 'disbursement',
                    'batch_id' => $disbursement->batch_id,
                    'status' => 'ERROR',
                    'http_status' => null,
                    'message' => $e->getMessage(),
                    'payload' => $payload,
                    'response' => null,
                ]);
            }

            throw $e;
        }
    }

}