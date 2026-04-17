<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\TimeSlot;
use Illuminate\Http\Request;

class TimeSlotController extends Controller
{
    public function index(Request $request)
    {

        $date = $request->query('date');
        $slots = TimeSlot::where('date', $date)->get();
        return response()->json($slots);
    }
}
