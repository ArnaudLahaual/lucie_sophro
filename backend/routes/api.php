<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TimeSlotController;
use Illuminate\Support\Facades\Route;

//get
Route::get('/slots', [TimeSlotController::class, 'index']);

//post
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/addBooking', [BookingController::class, 'store']);
