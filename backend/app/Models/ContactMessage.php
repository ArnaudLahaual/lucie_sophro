<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'lastname',
        'firstname',
        'email',
        'phone',
        'subject',
        'message',
    ];
}
