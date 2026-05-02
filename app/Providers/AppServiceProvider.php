<?php

namespace App\Providers;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\Mailer\Transport\Smtp\EsmtpTransport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Fix: SSL certificate verify failed on local XAMPP (Windows).
        // XAMPP's OpenSSL does not include a CA bundle, causing TLS connections
        // to Gmail SMTP to fail. This overrides the transport with peer
        // verification disabled. Safe for local development only.
        Mail::extend('smtp', function (array $config = []) {
            $transport = new EsmtpTransport(
                $config['host'] ?? 'smtp.gmail.com',
                $config['port'] ?? 587,
                false // No implicit TLS; STARTTLS will be used
            );

            $transport->setUsername($config['username'] ?? '');
            $transport->setPassword($config['password'] ?? '');

            // Disable SSL peer verification (needed for XAMPP on Windows)
            $transport->getStream()->setStreamOptions([
                'ssl' => [
                    'verify_peer'      => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ],
            ]);

            return $transport;
        });
    }
}
