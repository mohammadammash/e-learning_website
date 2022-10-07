<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;
    protected $fillable = [
        'file_url',
        'name',
    ];

    function course()
    {
        $this->belongsTo(Course::class);
    }

    function students()
    {
        $this->belongsToMany(User::class);
    }
}
