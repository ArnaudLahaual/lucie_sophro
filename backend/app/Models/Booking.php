<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = "bookings";

    protected $fillable = [

        'firstname',
        'lastname',
        'email',
        'phone',
        'subject',
        'time_slot_id',

    ];
}
