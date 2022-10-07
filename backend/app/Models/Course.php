<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
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
