<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScholarshipController;
use App\Http\Controllers\RequirementController;
use App\Http\Controllers\AnnouncementController;

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'service' => 'master-service'
    ]);
});

Route::apiResource('scholarships', ScholarshipController::class);
Route::apiResource('requirements', RequirementController::class);
Route::apiResource('announcements', AnnouncementController::class);
Route::patch('/scholarships/{scholarship}/activate', [ScholarshipController::class, 'activate']);
Route::patch('/scholarships/{scholarship}/deactivate', [ScholarshipController::class, 'deactivate']);
Route::patch('/scholarships/{scholarship}/publish', [ScholarshipController::class, 'publish']);
Route::patch('/scholarships/{scholarship}/unpublish', [ScholarshipController::class, 'unpublish']);