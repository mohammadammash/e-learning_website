<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class StudentCourse extends Model
{
    use HasFactory;
    protected $table = 'students_courses';

    protected $fillable = [
        'student_id',
        'course_id',
    ];

    public function courses()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
}
