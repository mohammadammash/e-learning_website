<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstructorController extends Controller
{
    public function addAssignment(Request $request)
    {
        return 'add asg';
    }
    public function addAnnouncement(Request $request)
    {
        return 'add anc';
    }
    public function getCourses(Request $request)
    {
        return 'get crs';
    }
    public function getAssignments(Request $request, $course_id)
    {
        return $course_id.' get asg';
    }
    public function getSubmittedAssignments(Request $request, $assignment_id)
    {
        return $assignment_id.' get submit asg';
    }
}
