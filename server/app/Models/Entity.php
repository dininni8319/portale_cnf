<?php

namespace App\Models;

use App\Models\Meeting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Entity extends Model
{
    use HasFactory;
    // reserve_id
    protected $fillable = [
        'ufficio',
        'codice_catastale',  
        'office_phone',
        'email_addetto_ufficio',
    ]; 

    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }

}
