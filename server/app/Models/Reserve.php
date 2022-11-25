<?php

namespace App\Models;

use App\Models\Meeting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reserve extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'start',
        'end',
        'phone',
        'description',
        'codice_fiscale',
        'tipologia_richiesta',
        'stato',
        'note_lavorazione',
        'meeting_id',
    ];

    public function meeting()
    {
        return $this->hasOne(Meeting::class);
    }
}
