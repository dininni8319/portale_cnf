<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
