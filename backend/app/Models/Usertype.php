<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Usertype extends Model
{
    use HasFactory;
 
    protected $table = 'user_types';

    protected $fillable = [
        'type',
    ];

    public function users(){
        return $this->hasMany(User::class, 'user_type_id', 'id');
    }
}
