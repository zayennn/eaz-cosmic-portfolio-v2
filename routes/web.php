<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome', [
        'starsCount' => 300,
    ]);
})->name('home');

Route::get('/what-i-use', function () {
    return view('what-i-use', [
        'starsCount' => 100,
    ]);
})->name('what-i-use');

Route::get('/what-ive-built', function () {
    return view('what-ive-built', [
        'starsCount' => 200,
    ]);
})->name('what-ive-built');

Route::get('/what-im-into', function () {
    return view('what-im-into', [
        'starsCount' => 300,
    ]);
})->name('what-im-into');

Route::get('/behind-the-code', function () {
    return view('behind-the-code', [
        'starsCount' => 300,
    ]);
})->name('behind-the-code');

Route::get('/api/wakatime', function () {
    $apiKey = config('services.wakatime.api_key');

    if (blank($apiKey)) {
        return response()->json([
            'message' => 'WakaTime API key is not configured.',
        ], 500);
    }

    $stats = Http::withoutVerifying()
        ->get('https://wakatime.com/api/v1/users/current/stats/last_7_days', [
            'api_key' => $apiKey,
        ]);

    $summaries = Http::withoutVerifying()
        ->get('https://wakatime.com/api/v1/users/current/summaries', [
            'start' => now()->subDays(6)->toDateString(),
            'end' => now()->toDateString(),
            'api_key' => $apiKey,
        ]);

    return response()->json([
        'stats' => $stats->json(),
        'summaries' => $summaries->json(),
    ]);
});

Route::get('/get-in-touch', function () {
    return view('get-in-touch');
})->name('get-in-touch');

Route::post('/contact/send', function (Request $request) {

    // Validate
    $validated = $request->validate([
        'name' => 'required|min:2|max:100',
        'email' => 'required|email|max:100',
        'subject' => 'nullable|max:200',
        'message' => 'required|min:10|max:2000',
    ]);

    try {
        Mail::raw(
            "Name: {$validated['name']}\n".
            "Email: {$validated['email']}\n".
            'Subject: '.($validated['subject'] ?? 'No Subject')."\n\n".
            "Message:\n{$validated['message']}\n\n".
            "---\nSent from Cosmic Portfolio Contact Form",
            function ($message) use ($validated) {
                $message->to('athazahranel@gmail.com')
                    ->subject('Portfolio Contact: '.($validated['subject'] ?? 'No Subject'))
                    ->replyTo($validated['email'], $validated['name']);
            }
        );

        return response()->json(['success' => true]);

    } catch (\Exception $e) {
        Log::error('Contact form email failed: '.$e->getMessage());

        return response()->json([
            'success' => false,
            'message' => 'Failed to send message. Please try again later.',
        ], 500);
    }

})->name('contact.send');