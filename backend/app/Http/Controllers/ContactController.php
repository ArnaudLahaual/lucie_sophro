<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageConfirmation;
use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lastname'  => 'required|string|min:2|max:30',
            'firstname' => 'required|string|min:2|max:30',
            'email' => 'required|email',
            'phone'     => 'required|string|max:20',
            'subject'   => 'required|string|max:100',
            'message'   => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erreur de validation',
                'errors' => $validator->errors()
            ], 422);
        }

        $contactMessage = ContactMessage::create(
            $validator->validated()
        );

        //mail admin
        Mail::to('arnaud.lahaual@gmail.com')->send(
            new ContactMessageReceived($contactMessage)
        );

        //mail user a ajouter en PROD ! 
        // Mail::to($contactMessage->email)->send(
        //     new ContactMessageConfirmation($contactMessage)
        // );

        return response()->json([
            'message' => 'Message envoyé avec succès',
            'contactMessage' => $contactMessage
        ], 201);
    }
}
