<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get("/what-i-use", function() {
    return view('what-i-use');
})->name('what-i-use');