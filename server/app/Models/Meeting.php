<?php

namespace App\Models;

use App\Models\Reserve;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable = [
        'giorno_appuntamento',
        'start',  
        'stato_prenotazione',
        'entity_id',
    ]; 

    // public function meeting()
    // {
    //     return $this->hasOne(Meeting::class);
    // }
    
    public function reservation()
    {
        return $this->belongsTo(Reserve::class);
    }
}

