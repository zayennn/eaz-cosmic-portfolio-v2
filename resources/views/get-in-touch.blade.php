@extends('layouts.app')

@section('title', 'Get in Touch')

@section('content')
    <section class="contact-page">
        <!-- Signal Waves Background -->
        <div class="signal-waves">
            <div class="signal-ring"></div>
            <div class="signal-ring"></div>
            <div class="signal-ring"></div>
            <div class="signal-ring"></div>
        </div>

        <!-- Header -->
        <div class="contact-header">
            <div class="contact-badge">
                <i class="fas fa-satellite"></i> Open Channel
            </div>
            <h1 class="contact-title">
                Get in <span class="highlight">Touch</span>
            </h1>
            <p class="contact-subtitle">
                Have a project in mind or just want to chat? Send me a message through the terminal below.
                I'm always open to new opportunities!
            </p>
        </div>

        <!-- Main Grid -->
        <div class="contact-grid">
            <!-- Left - Contact Info -->
            <div class="contact-info-section">
                <!-- Email -->
                <div class="info-card">
                    <div class="info-icon-orbit" style="color: #6366f1; background: rgba(99,102,241,0.1);">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label" style="color: #6366f1;">Email</div>
                        <div class="info-value">athazahranel@gmail.com</div>
                        <div class="info-sub">Primary contact</div>
                        <a href="mailto:athazahranel@gmail.com" class="info-link">
                            Send Email <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Phone -->
                <div class="info-card">
                    <div class="info-icon-orbit" style="color: #8b5cf6; background: rgba(139,92,246,0.1);">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label" style="color: #8b5cf6;">Phone</div>
                        <div class="info-value">+62 8778 8612 930</div>
                        <div class="info-sub">Available on WhatsApp - fastest response</div>
                        <a href="https://wa.me/6287788612930" target="_blank" class="info-link">
                            Chat on WhatsApp <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Location -->
                <div class="info-card">
                    <div class="info-icon-orbit" style="color: #06b6d4; background: rgba(6,182,212,0.1);">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label" style="color: #06b6d4;">Location</div>
                        <div class="info-value">Indonesia, West Java</div>
                        <div class="info-sub">Remote-friendly - Open to relocation</div>
                    </div>
                </div>

                <!-- Availability -->
                <div class="availability-orbit">
                    <div class="availability-pulse">
                        <div class="pulse-ring"></div>
                        <span class="availability-text">Available for Opportunities</span>
                    </div>
                    <p class="availability-desc">
                        Currently open to freelance projects, collaborations, and full-time positions.
                        Let's create something amazing together!
                    </p>
                </div>
            </div>

            <!-- Right - Form Terminal -->
            <div class="form-terminal" id="formTerminal">
                <!-- Terminal Header -->
                <div class="terminal-header">
                    <span class="terminal-dot red"></span>
                    <span class="terminal-dot yellow"></span>
                    <span class="terminal-dot green"></span>
                    <span class="terminal-title">message@cosmic-terminal:~$</span>
                    <span class="terminal-status">
                        <span class="status-blink"></span> SECURE CHANNEL
                    </span>
                </div>

                <!-- Form -->
                <form id="contactForm">
                    @csrf
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i> Your Name
                        </label>
                        <input type="text" name="name" class="form-input" placeholder="Enter your name..." required>
                        <div class="input-glitch"></div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-envelope"></i> Email Address
                        </label>
                        <input type="email" name="email" class="form-input" placeholder="Enter your email..." required>
                        <div class="input-glitch"></div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-tag"></i> Subject
                        </label>
                        <input type="text" name="subject" class="form-input" placeholder="What's this about?">
                        <div class="input-glitch"></div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-pen"></i> Message
                        </label>
                        <textarea name="message" class="form-textarea" placeholder="Type your message here..." rows="5" required></textarea>
                        <div class="input-glitch"></div>
                    </div>

                    <div class="submit-section">
                        <button type="submit" class="submit-btn" id="submitBtn">
                            <span>Transmit Message</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                        <div class="encryption-indicator">
                            <i class="fas fa-lock"></i>
                            <span>Encrypted</span>
                            <div class="encryption-dots">
                                <span class="encryption-dot"></span>
                                <span class="encryption-dot"></span>
                                <span class="encryption-dot"></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Social Orbit -->
        {{-- <div class="social-orbit-section">
            <p class="social-orbit-title">Or Connect Via</p>
            <div class="social-orbit-ring">
                <a href="https://www.instagram.com/zaayeenn_/" target="_blank" rel="noopener noreferrer"
                    class="social-orbit-btn" title="Instagram" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/elang-atha-zahran-100459220/" target="_blank"
                    rel="noopener noreferrer" class="social-orbit-btn" title="LinkedIn" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/zayennn" target="_blank" rel="noopener noreferrer" class="social-orbit-btn"
                    title="GitHub" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.tiktok.com/@.publicstatic" target="_blank" rel="noopener noreferrer"
                    class="social-orbit-btn" title="TikTok" aria-label="TikTok">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>
        </div> --}}

        <!-- Success Overlay -->
        <div class="success-overlay" id="successOverlay">
            <div class="success-modal">
                <div class="success-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3 class="success-title">Message Transmitted!</h3>
                <p class="success-desc">
                    Your message has been successfully sent through the cosmic network.
                    I'll get back to you as soon as possible!
                </p>
                <button class="success-close" id="successClose">Close Channel</button>
            </div>
        </div>
    </section>
@endsection
