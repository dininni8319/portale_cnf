<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'email_addetto_ufficio',
        'start',
        'end',
        'phone',
        'codice_fiscale',
        'tipologia_richiesta',
        'ufficio',
        'description',
    ];
}
