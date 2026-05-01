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
        
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                closeMenu();
            });
        });
        
        if (mobileCvBtn) {
            mobileCvBtn.addEventListener('click', () => {
                closeMenu();
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburgerCheckbox.checked) {
                closeMenu();
            }
        });
        
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
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.touchAction = 'none';
        
        hamburgerCheckbox.checked = true;
        hamburger.classList.add('menu-open');
        mobileMenuOverlay.classList.add('active');
    }
    
    function closeMenu() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        
        document.documentElement.style.overflow = '';
        document.documentElement.style.touchAction = '';
        
        window.scrollTo(0, scrollPosition);
        
        hamburgerCheckbox.checked = false;
        hamburger.classList.remove('menu-open');
        mobileMenuOverlay.classList.remove('active');
    }

    const currentPath = window.location.pathname;
    
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPath || 
            (currentPath === '/' && href === '/') ||
            (currentPath === '' && href === '/')) {
            link.classList.add('active');
        }
    });
    
    window.addEventListener('popstate', () => {
        if (hamburgerCheckbox.checked) {
            closeMenu();
        }
    });

    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(...args) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            return;
        }
        return originalScrollTo.apply(this, args);
    };
    
    window.addEventListener('scroll', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            window.scrollTo(0, scrollPosition);
        }
    }, { passive: true });
    
    document.addEventListener('wheel', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });
    
    document.addEventListener('touchmove', function(e) {
        if (hamburgerCheckbox && hamburgerCheckbox.checked) {
            const target = e.target;
            if (target.closest('.mobile-menu-content')) {
                const menuContent = target.closest('.mobile-menu-content');
                const isAtTop = menuContent.scrollTop === 0;
                const isAtBottom = menuContent.scrollTop + menuContent.clientHeight >= menuContent.scrollHeight;
                
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