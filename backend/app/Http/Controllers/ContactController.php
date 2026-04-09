<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'lastname' => 'required|between:2,30',
            'firstname' => 'required|between:2,30',
            'email' => 'required|email',
            'subject' => 'required|max:100',
            'text' => 'required|max:1000'
        ]);

        return response()->json([
            'message' => 'Message créé avec succès',
        ], 201);
    }
}
