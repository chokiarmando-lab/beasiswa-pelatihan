<?php

namespace App\Jobs;

use App\Models\Disbursement;
use App\Services\OdooService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SendDisbursementToOdoo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;

    public $backoff = 5;

    public function __construct(
        public int $disbursementId
    ) {}

    public function handle(OdooService $odooService): void
    {
        $disbursement = Disbursement::find($this->disbursementId);

        if (!$disbursement) {
            Log::error('Disbursement tidak ditemukan', [
                'id' => $this->disbursementId,
            ]);

            return;
        }

        $odooService->sendToOdoo($disbursement);
    }
}

