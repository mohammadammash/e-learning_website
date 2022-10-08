<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function getCourses(Request $request)
    {
        return 'coursetdfo';
    }

    public function submitAssignment(Request $request)
    {
        return 'assignmentoo';
    }
}
