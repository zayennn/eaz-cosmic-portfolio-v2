<?php

use Illuminate\Support\Facades\Http;
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

Route::get('/api/wakatime', function () {
    $apiKey = config('services.wakatime.api_key');

    if (blank($apiKey)) {
        return response()->json([
            'message' => 'WakaTime API key is not configured.'
        ], 500);
    }

    $stats = Http::withoutVerifying()
        ->get("https://wakatime.com/api/v1/users/current/stats/last_7_days", [
            'api_key' => $apiKey
        ]);

    $summaries = Http::withoutVerifying()
        ->get("https://wakatime.com/api/v1/users/current/summaries", [
            'start' => now()->subDays(6)->toDateString(),
            'end' => now()->toDateString(),
            'api_key' => $apiKey
        ]);

    return response()->json([
        'stats' => $stats->json(),
        'summaries' => $summaries->json()
    ]);
});
