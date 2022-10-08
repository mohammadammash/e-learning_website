<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\StudentCourse;
use App\Models\Course;

class StudentController extends Controller
{
    public function getCourses(Request $request)
    {
        $user = auth()->user();
        $student_id = $user->id;
        $student_courses = $user->students_courses()->get();
        $courses = [];

        foreach($student_courses as $std){
            array_push($courses,$std->courses()->get());
        }
        
        return response()->json([
                'status'=>'Success',
                "data"=>$courses
            ]);
    }

    public function submitAssignment(Request $request)
    {
        return 'assignmentoo';
    }
}
