<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckIfAdmin;

Route::group(['prefix' => 'v0.1'], function () {

    //REGISTRATION
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    //JWT-AUTH MIDDLEWARE
    Route::group(['middleware' => 'auth'], function () {
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);

        //ADMIN  AUTHORIZATION
        Route::group(['middleware' => 'admin'], function () {
        });

        //STUDENT AUTHORIZATION
        Route::group(['middleware' => 'instructor'], function () {
        });

        //INSTRUCTOR AUTHORIZATION
        Route::group(['middleware' => 'instructor'], function () {
        });
    });
});
