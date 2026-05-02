<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome', [
        'starsCount' => 300
    ]);
})->name('home');

Route::get('/what-i-use', function() {
    return view('what-i-use', [
        'starsCount' => 100
    ]);
})->name('what-i-use');

Route::get('/what-ive-built', function() {
    return view('what-ive-built', [
        'starsCount' => 200
    ]);
})->name('what-ive-built');

Route::get('/what-im-into', function() {
    return view('what-im-into', [
        'starsCount' => 300
    ]);
})->name('what-im-into');

Route::get('/behind-the-code', function() {
    return view('behind-the-code', [
        'starsCount' => 300
    ]);
})->name('behind-the-code');