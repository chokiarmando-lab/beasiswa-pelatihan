<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

use App\Http\Controllers\DisbursementController;
use App\Http\Controllers\DisbursementDetailController;



Route::middleware(['jwt','role:admin,bpdp'])->group(function () {

  
    Route::get('/disbursements', [
        DisbursementController::class,
        'index',
    ]);

    Route::get('/disbursements/{id}', [
        DisbursementController::class,
        'show',
    ]);

    Route::post('/disbursements', [
        DisbursementController::class,
        'store',
    ]);

    Route::patch('/disbursements/{id}', [
        DisbursementController::class,
        'update',
    ]);

    Route::patch('/disbursements/{id}/approve', [
        DisbursementController::class,
        'approve',
    ]);

  
    Route::get('/disbursements/{id}/details', [
        DisbursementDetailController::class,
        'index',
    ]);

    Route::post('/disbursements/{id}/details', [
        DisbursementDetailController::class,
        'store',
    ]);
});


Route::post('/odoo/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Odoo menerima request',
    ]);
});

Route::post('/odoo/disbursement', function (Request $request) {
    \Log::info('Odoo menerima payload', [
        'payload' => $request->all(),
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Payload diterima Odoo',
        'data' => $request->all(),
    ]);
});

