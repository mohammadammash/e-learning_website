<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class AdminController extends Controller
{
    public function addStudent(Request $request){
        $user = auth()->user();
        return $user;
    }

    public function addInstructor(Request $request){
        return 'instructero';
    }

    public function addCourse(Request $request){
        return 'Coursetoo';
    }

    public function assignInstructorToCourse(Request $request){
        return 'assignetoo';
    }
}
