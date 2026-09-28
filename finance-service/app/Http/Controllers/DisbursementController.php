<?php

namespace App\Http\Controllers;

use App\Models\Disbursement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Jobs\SendDisbursementToOdoo;

class DisbursementController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            Disbursement::orderByDesc('created_at')->get()
        );
    }

    public function show(int $id): JsonResponse
    {
        $disbursement = Disbursement::find($id);

        if (!$disbursement) {
            return response()->json([
                'message' => 'Data pencairan tidak ditemukan',
            ], 404);
        }

        return response()->json($disbursement);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'batch_id' => 'required|string|unique:disbursements,batch_id',
            'program_id' => 'required|string',
            'total_amount' => 'required|numeric|min:0',
            'notes' => 'nullable|string',
        ]);

        $disbursement = Disbursement::create($validated);

        return response()->json([
            'message' => 'Data pencairan berhasil dibuat',
            'data' => $disbursement,
        ], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $disbursement = Disbursement::find($id);

        if (!$disbursement) {
            return response()->json([
                'message' => 'Data pencairan tidak ditemukan',
            ], 404);
        }

        $validated = $request->validate([
            'status' => 'sometimes|in:DRAFT,SUBMITTED,APPROVED,REJECTED,PROCESSING,PAID,FAILED',
            'approved_by' => 'nullable|integer',
            'approved_at' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        $disbursement->update($validated);

        return response()->json([
            'message' => 'Data pencairan berhasil diperbarui',
            'data' => $disbursement,
        ]);
    }

    public function approve(Request $request, int $id): JsonResponse
    {
        $disbursement = Disbursement::find($id);

        if (!$disbursement) {
            return response()->json([
                'message' => 'Data pencairan tidak ditemukan',
            ], 404);
        }

        if ($disbursement->status !== 'SUBMITTED') {
            return response()->json([
                'message' => 'Pengajuan hanya dapat disetujui jika berstatus SUBMITTED',
            ], 400);
        }

        $validated = $request->validate([
            'approved_by' => 'required|integer',
        ]);

        $disbursement->update([
            'status' => 'APPROVED',
            'approved_by' => $validated['approved_by'],
            'approved_at' => now(),
        ]);

        SendDisbursementToOdoo::dispatch($disbursement->id);
        
        return response()->json([
            'message' => 'Pengajuan pencairan berhasil disetujui BPDP',
            'data' => $disbursement,
        ]);
    }
}