<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Illuminate\Http\Request;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_url',
        'user_type_id',
    ];

    public function usertype()
    {
        return $this->belongsTo(Usertype::class, 'user_type_id');
    }

    public function students_courses()
    {
        return $this->belongsToMany(StudentCourse::class,'id','student_id');
    }

    protected $hidden = [
        'password',
    ];
}
