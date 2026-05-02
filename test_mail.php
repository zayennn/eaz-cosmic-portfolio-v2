<?php
// Quick test - run via: php artisan tinker --execute="require 'test_mail.php';"
// OR: php test_mail.php (from project root)

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    Illuminate\Support\Facades\Mail::raw(
        "Test email dari Cosmic Portfolio\n\nJika kamu menerima email ini, konfigurasi SMTP sudah berjalan dengan benar!",
        function ($message) {
            $message->to('athazahranel@gmail.com')
                    ->subject('✅ Test SMTP - Cosmic Portfolio');
        }
    );
    echo "✅ EMAIL BERHASIL DIKIRIM!\n";
    echo "Cek inbox athazahranel@gmail.com\n";
} catch (Exception $e) {
    echo "❌ GAGAL: " . $e->getMessage() . "\n";
    echo "\nTrace:\n" . $e->getTraceAsString() . "\n";
}
