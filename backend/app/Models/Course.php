<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'instructor_id',
    ];

    function assignments()
    {
        $this->hasMany(Assignment::class);
    }

    function instructor()
    {
        $this->belongsTo(User::class);
    }

    function students()
    {
        $this->belongsToMany(User::class);
    }
}
