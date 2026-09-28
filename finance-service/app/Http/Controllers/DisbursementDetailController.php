<?php

namespace App\Http\Controllers;

use App\Models\Disbursement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DisbursementDetailController extends Controller
{
    public function index(int $id): JsonResponse
    {
        $disbursement = Disbursement::find($id);

        if (!$disbursement) {
            return response()->json([
                'message' => 'Data pencairan tidak ditemukan',
            ], 404);
        }

        return response()->json(
            $disbursement->details
        );
    }

    public function store(Request $request, int $id): JsonResponse
    {
        $disbursement = Disbursement::find($id);

        if (!$disbursement) {
            return response()->json([
                'message' => 'Data pencairan tidak ditemukan',
            ], 404);
        }

        $validated = $request->validate([
            'institution_code' => 'required|string',
            'institution_name' => 'required|string',
            'amount' => 'required|numeric|min:0',
            'account_number' => 'required|string',
            'bank_name' => 'required|string',
        ]);

        $detail = $disbursement->details()->create($validated);

        return response()->json([
            'message' => 'Detail pencairan berhasil dibuat',
            'data' => $detail,
        ], 201);
    }
}