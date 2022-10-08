<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;


class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'instructor_id',
        'content',
    ];

    function instructor(){
        $this->belongsTo(User::class);
    }
}
