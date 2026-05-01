<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome', [
        'starsCount' => 300
    ]);
})->name('home');

Route::get("/what-i-use", function() {
    return view('what-i-use', [
        'starsCount' => 100
    ]);
})->name('what-i-use');