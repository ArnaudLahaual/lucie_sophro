<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeSlot extends Model
{
    protected $table = "time_slots";

    protected $fillable = [
        'date',
        'time',
        'is_available'
    ];

    //empeche d'afficher un nombre, force a afficher un boolean
    protected $casts = [
        'is_available' => 'boolean'
    ];
}
