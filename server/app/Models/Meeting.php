<?php

namespace App\Models;

use App\Models\Entity;
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

    public function entity()
    {
        return $this->belongsTo(Entity::class);
    }
    
    // i have to check it, not sure if is working properly
    public function reservation()
    {
        return $this->belongsTo(Reserve::class);
    }
}

