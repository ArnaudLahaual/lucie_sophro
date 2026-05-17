<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TimeSlotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public
Route::get('/slots', [TimeSlotController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/addBooking', [BookingController::class, 'store']);

// Auth
Route::post('/login', [AuthController::class, 'login']);

// Protégées
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', fn(Request $request) => response()->json($request->user()));
    Route::get('/bookings/today', [BookingController::class, 'today']);
    Route::get('/bookings', [BookingController::class, 'index']);
    Route::post('/bookings/delete', [BookingController::class, 'destroyBatch']);
});
