<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname'    => 'required|string|min:2|max:30',
            'lastname'     => 'required|string|min:2|max:30',
            'email'        => 'required|email',
            'phone'        => 'required|string|max:20',
            'subject'      => 'required|string|max:100',
            'time_slot_id' => 'required|integer|exists:time_slots,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erreur de validation',
                'errors'  => $validator->errors()
            ], 422);
        }

        //vérifie si le slot n'est pas réservable en même temps
        // lockForUpdate() verrouille la ligne le temps de la transaction
        // si user B arrive en même temps, il attend que user A ait fini
        try {
            $booking = DB::transaction(function () use ($request, $validator) {
                $slot = TimeSlot::where('id', $request->time_slot_id)
                    ->lockForUpdate()
                    ->first();

                if (Booking::where('time_slot_id', $slot->id)->exists()) {
                    throw new \Exception('Créneau déjà réservé', 409);
                }

                return Booking::create($validator->validated());
            });

            return response()->json([
                'message' => 'Réservation créée',
                'booking' => $booking,
            ], 201);
        } catch (\Exception $error) {
            return response()->json([
                'message' => $error->getMessage()
            ], $error->getCode() ?: 500);
        }
    }
}
