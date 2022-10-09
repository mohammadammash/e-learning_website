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

    public function students_assignments()
    {
        return $this->belongsToMany(StudentAssignment::class, 'id', 'assignment_id');
    }
}
