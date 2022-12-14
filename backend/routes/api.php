<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::group(['prefix' => 'v0.1'], function () {

    //LOGIN
    Route::post('login', [AuthController::class, 'login']);

    //JWT-AUTH MIDDLEWARE //ALL USERS SHOULD BE AUTHENTICATED
    Route::group(['middleware' => 'auth'], function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);

        //ADMIN  AUTHORIZATION
        Route::group(['middleware' => 'admin'], function () {
            Route::post('admin/add_instructor',[AdminController::class,'addInstructor'])->name('admin-add-instructor');
            Route::post('admin/add_student',[AdminController::class,'addStudent'])->name('admin-add-student');
            Route::post('admin/add_course',[AdminController::class,'addCourse'])->name('admin-add-course');
            Route::post('admin/assign_instructor_to_course', [AdminController::class, 'assignInstructorToCourse'])->name('admin-assign-instructor-to-course');
        });

        //INSTRUCTOR AUTHORIZATION
        Route::group(['middleware' => 'instructor'], function () {
            Route::post('instructor/add_student', [AdminController::class, 'addStudent'])->name('instructor-add-student'); //common with admin
            Route::post('instructor/add_assignment', [InstructorController::class, 'addAssignment'])->name('instructor-add-assignment');
            Route::post('instructor/add_announcement', [InstructorController::class, 'addAnnouncement'])->name('instructor-add-announcement');
            Route::get('instructor/courses', [InstructorController::class, 'getCourses'])->name('instructor-get-courses');
            Route::get('instructor/courses/{course_id}/assignments', [InstructorController::class, 'getAssignments'])->name('instructor-get-assignments');
            Route::get('instructor/courses/assignments/{assignment_id}', [InstructorController::class, 'getSubmittedAssignments'])->name('instructor-get-submitted-assignments');
        });

        //STUDENT AUTHORIZATION
        Route::group(['middleware' => 'student'], function () {
            Route::get('/courses/{course_id}/assignments', [InstructorController::class, 'getAssignments'])->name('student-get-assignments'); //common with instructor
            Route::get('/courses', [StudentController::class, 'getCourses'])->name('student-get-courses');
            Route::post('/courses/assignments/submit', [StudentController::class, 'submitAssignment'])->name('student-submit-assignment');
        });
    });
});
