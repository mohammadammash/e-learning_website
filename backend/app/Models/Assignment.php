<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_id',
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
