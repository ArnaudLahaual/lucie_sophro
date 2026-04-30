<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TimeSlotController;
use Illuminate\Support\Facades\Route;

//get
Route::get('/slots', [TimeSlotController::class, 'index']);

//post
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/addBooking', [BookingController::class, 'store']);

//auth
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Routes admin protégées
Route::middleware('auth:sanctum')->group(function () {
    //  futures routes back office
});
