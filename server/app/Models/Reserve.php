<?php

namespace App\Models;

use App\Models\Meeting;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reserve extends Model
{
    use HasFactory, Searchable;

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

    public function toSearchableArray()
    {
        $array = [
            "id" => $this->id,
            "first_name" => $this->first_name,
            "last_name" => $this->last_name,            
            "codice_fiscale" => $this->codice_fiscale,
        ];

        return $array;
    }

    public function meeting()
    {
        return $this->hasOne(Meeting::class);
    }
}
