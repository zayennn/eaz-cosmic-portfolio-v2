// ============================================
// NAVBAR - HAMBURGER ANIMATION + SCROLL LOCK
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileCvBtn = document.querySelector('.mobile-cv-btn');
    
    // Store scroll position
    let scrollPosition = 0;
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ============================================
    // HAMBURGER TOGGLE WITH SCROLL LOCK
    // ============================================
    if (hamburger && hamburgerCheckbox && mobileMenuOverlay) {
        // Toggle menu
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isOpen = hamburgerCheckbox.checked;
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking a mobile link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                closeMenu();
            });
        });
        
        // Close menu when clicking CV button
        if (mobileCvBtn) {
            mobileCvBtn.addEventListener('click', () => {
                closeMenu();
            });
        }
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburgerCheckbox.checked) {
                closeMenu();
            }
        });
        
        // Prevent scrolling on mobile menu when open
        mobileMenuOverlay.addEventListener('wheel', (e) => {
            if (hamburgerCheckbox.checked) {
                e.preventDefault();
            }
        }, { passive: false });
        
        mobileMenuOverlay.addEventListener('touchmove', (e) => {
            if (hamburgerCheckbox.checked) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    function openMenu() {
        // Save current scroll position
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Lock body scroll
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none'; // Prevent touch scroll on mobile
        
        // Prevent scrolling on html element too
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.touchAction = 'none';
        
        // Update hamburger state
        hamburgerCheckbox.checked = true;
        hamburger.classList.add('menu-open');
        mobileMenuOverlay.classList.add('active');
    }
    
    function closeMenu() {
        // Unlock body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        
        // Unlock html scroll
        document.documentElement.style.overflow = '';
        document.documentElement.style.touchAction = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
        
        // Update hamburger state
        hamburgerCheckbox.checked = false;
        hamburger.classList.remove('menu-open');
        mobileMenuOverlay.classList.remove('active');
    }
    
    // ============================================
    // ACTIVE LINK DETECTION
    // ============================================
    const currentPath = window.location.pathname;
    
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPath || 
            (currentPath === '/' && href === '/') ||
            (currentPath === '' && href === '/')) {
            link.classList.add('active');
        }
    });
    
    // ============================================
    // HANDLE BROWSER BACK/FORWARD BUTTONS
    // ============================================
    window.addEventListener('popstate', () => {
        if (hamburgerCheckbox.checked) {
            closeMenu();
        }
    });
    
    // ============================================
    // PREVENT SCROLL WHEN MENU IS OPEN
    // (Additional safety measures)
    // ============================================
    
    // Disable smooth scroller when menu is open
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(...args) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            // Don't allow scrollTo when menu is open
            return;
        }
        return originalScrollTo.apply(this, args);
    };
    
    // Prevent any scroll events
    window.addEventListener('scroll', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            window.scrollTo(0, scrollPosition);
        }
    }, { passive: true });
    
    // Prevent mouse wheel on entire page when menu is open
    document.addEventListener('wheel', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });
    
    // Prevent touch scroll on entire page when menu is open
    document.addEventListener('touchmove', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            // Allow scroll inside menu content if needed
            const target = e.target;
            if (target.closest('.mobile-menu-content')) {
                const menuContent = target.closest('.mobile-menu-content');
                const isAtTop = menuContent.scrollTop === 0;
                const isAtBottom = menuContent.scrollTop + menuContent.clientHeight >= menuContent.scrollHeight;
                
                // If scrolling up at top or down at bottom, prevent
                if ((isAtTop && e.touches[0].clientY > e.touches[0].clientY + 10) ||
                    (isAtBottom && e.touches[0].clientY < e.touches[0].clientY - 10)) {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
        }
    }, { passive: false });
    
    console.log('Navbar initialized with scroll lock');
});