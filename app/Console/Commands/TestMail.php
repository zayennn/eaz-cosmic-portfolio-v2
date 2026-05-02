<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestMail extends Command
{
    protected $signature = 'mail:test {email=athazahranel@gmail.com}';
    protected $description = 'Test SMTP email configuration';

    public function handle(): int
    {
        $to = $this->argument('email');
        $this->info("Sending test email to: {$to}");

        try {
            Mail::raw(
                "Test email dari Cosmic Portfolio\n\nJika kamu menerima email ini, konfigurasi SMTP sudah berjalan dengan benar!",
                function ($message) use ($to) {
                    $message->to($to)->subject('Test SMTP - Cosmic Portfolio');
                }
            );

            $this->info('EMAIL BERHASIL DIKIRIM! Cek inbox ' . $to);
            return self::SUCCESS;

        } catch (\Exception $e) {
            $this->error('GAGAL: ' . $e->getMessage());
            return self::FAILURE;
        }
    }
}
