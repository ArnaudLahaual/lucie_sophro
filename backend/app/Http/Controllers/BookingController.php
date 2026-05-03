<?php

namespace App\Http\Controllers;

use App\Mail\BookingReceived;
use App\Mail\BookingConfirmation;
use App\Models\Booking;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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

        try {
            $booking = DB::transaction(function () use ($request, $validator) {
                $slot = TimeSlot::where('id', $request->time_slot_id)
                    ->lockForUpdate()
                    ->first();

                if (!$slot || !$slot->is_available) {
                    throw new \Exception('Créneau déjà réservé', 409);
                }

                $booking = Booking::create($validator->validated());

                $slot->update(['is_available' => false]);

                return $booking;
            });

            // charge la relation timeSlot pour avoir date + heure dans les mails
            $booking->load('timeSlot');

            // Mail à Lucie
            Mail::to('email-de-lucie@gmail.com')->send(
                new BookingReceived($booking)
            );

            // Mail de confirmation au client a décommenter en prod
            // Mail::to($booking->email)->send(
            //     new BookingConfirmation($booking)
            // );

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

    public function index()
    {
        $bookings = Booking::with('timeSlot')->get();
        return response() -> json($bookings);
    }
}
