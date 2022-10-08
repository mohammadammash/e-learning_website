<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\CheckIfAdmin;

Route::group(['prefix' => 'v0.1'], function () {

    //REGISTRATION
    Route::post('register', [AuthController::class, 'register']);
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


    });
});
