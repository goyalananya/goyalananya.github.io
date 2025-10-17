'use strict';

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Initialize website functionality with better UX and error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeNavigation();
        initializeSmoothScroll();
        if (!isReducedMotion) {
            initializeFadeInAnimations();
        }
    } catch (error) {
        console.error('Error initializing website functionality:', error);
    }
});

// ============================================
// Mobile Navigation
// ============================================
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!navToggle || !navLinks) {
        console.warn('Navigation elements not found');
        return;
    }

    const toggleMenu = (isOpen) => {
        navToggle.setAttribute('aria-expanded', isOpen);
        navLinks.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        if (!isOpen && navToggle.focus) {
            navToggle.focus();
        }
    };

    // Toggle menu
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        toggleMenu(!isExpanded);
    });

    // Close menu when clicking nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navToggle.contains(e.target) && 
            !navLinks.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu(false);
        }
    });
}
    
    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for just "#" or disabled links
            if (href === '#' || this.classList.contains('coming-soon')) {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = 80; // Account for sticky navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
// ============================================
// Smooth Scroll
// ============================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for just "#" or disabled links
            if (href === '#' || this.classList.contains('coming-soon')) {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                if (!isReducedMotion) {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo(0, offsetPosition);
                }
            }
        });
    });
}

// ============================================
// Fade-in Animations
// ============================================
function initializeFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Apply fade-in only to sections below the hero
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(section);
    });
}
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(section);
    });
    
    // ============================================
    // Navbar Shadow on Scroll
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    let ticking = false;
    
    const updateNavbar = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');
    
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showFormStatus('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormStatus('Please enter a valid email address', 'error');
                return;
            }
            
            // Disable submit button during submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await simulateFormSubmission(formData);
                
                showFormStatus('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } catch (error) {
                showFormStatus('Oops! Something went wrong. Please try again or email directly.', 'error');
                console.error('Form submission error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
    
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            // Simulate API call
            setTimeout(() => {
                // For demo purposes, always resolve
                // Replace this with actual fetch() call to your backend
                console.log('Form data:', data);
                resolve();
                
                // Example of actual implementation:
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(resolve)
                .catch(reject);
                */
            }, 1000);
        });
    }
    
    // ============================================
    // Lazy Loading Images (Fallback for older browsers)
    // ============================================
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        console.log('Native lazy loading supported');
    } else {
        // Fallback for older browsers
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // Performance: Reduce Motion for Users Who Prefer It
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    }
    
    // ============================================
    // Page Load Animation
    // ============================================
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    // Fallback in case load event doesn't fire
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
