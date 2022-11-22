<?php

namespace App\Models;

use App\Models\Meeting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'meeting_id',
    ];

    public function meeting()
    {
        return $this->hasOne(Meeting::class);
    }
}
