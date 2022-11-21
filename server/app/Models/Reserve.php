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
        'description',
        'codice_fiscale',
        'tipologia_richiesta',
        'ufficio',
        'codice_catastale',
        'stato',
        'note_lavorazione',
        'entity_id',
    ];
}
