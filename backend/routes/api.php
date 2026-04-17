<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\TimeSlotController;
use Illuminate\Support\Facades\Route;

Route::get('/slots', [TimeSlotController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
