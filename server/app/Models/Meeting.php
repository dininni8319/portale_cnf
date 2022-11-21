<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable = [
        'ufficio',
        'codice_catastale',
        'giorno_appuntamento',
        'email_addetto_ufficio',
        'start',
        'end',
        'stato_prenotazione',
        'note_lavorazione',
    ]; 
}

