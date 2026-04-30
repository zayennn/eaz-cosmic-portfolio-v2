// ============================================
// PAGE LOADER - NAVIGATION TRANSITION
// ============================================

class PageLoader {
    constructor() {
        this.loader = document.getElementById('pageLoader');
        this.isAnimating = false;
        this.minDuration = 4000; // Minimum 4 seconds animation
        this.init();
    }

    init() {
        if (!this.loader) {
            console.warn('Page loader element not found');
            return;
        }

        // Intercept all navigation clicks
        this.interceptNavigation();
        
        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.showLoader();
            setTimeout(() => {
                window.location.reload();
            }, this.minDuration);
        });
    }

    showLoader() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.loader.classList.add('active');
        this.loader.classList.remove('fade-out');
        
        // Reset animations by re-triggering
        this.resetAnimations();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, this.minDuration);
        });
    }

    hideLoader() {
        return new Promise((resolve) => {
            this.loader.classList.add('fade-out');
            
            setTimeout(() => {
                this.loader.classList.remove('active', 'fade-out');
                this.isAnimating = false;
                resolve();
            }, 400);
        });
    }

    resetAnimations() {
        // Get all animated elements
        const animatedElements = this.loader.querySelectorAll('[class*="loader-"]');
        
        animatedElements.forEach(el => {
            // Clone and replace to restart animation
            const newEl = el.cloneNode(true);
            el.parentNode.replaceChild(newEl, el);
        });

        // Reset loader text animation
        const loaderText = this.loader.querySelector('.loader-text');
        if (loaderText) {
            const newLoaderText = loaderText.cloneNode(true);
            loaderText.parentNode.replaceChild(newLoaderText, loaderText);
        }
    }

    interceptNavigation() {
        document.addEventListener('click', (e) => {
            // Find closest anchor tag
            const link = e.target.closest('a');
            
            if (!link) return;
            
            // Ignore hash links, download links, and new tab
            const href = link.getAttribute('href');
            if (!href || 
                href.startsWith('#') || 
                link.hasAttribute('download') ||
                link.target === '_blank') {
                return;
            }

            // Ignore external links
            if (link.hostname && link.hostname !== window.location.hostname) {
                return;
            }
            
            // Ignore if it's the current page
            if (link.pathname === window.location.pathname && link.search === window.location.search) {
                return;
            }
            
            e.preventDefault();
            
            // Show loader and navigate after animation
            this.showLoader().then(() => {
                window.location.href = href;
            });
        });
    }

    navigateTo(url) {
        this.showLoader().then(() => {
            window.location.href = url;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = new PageLoader();
    
    window.pageLoader = pageLoader;
    
    const loader = document.getElementById('pageLoader');
    if (loader && loader.classList.contains('active')) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.classList.remove('active', 'fade-out');
            }, 400);
        }, 500);
    }
});