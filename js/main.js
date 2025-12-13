/**
 * EduEarn India - Main JavaScript File
 * Handles common functionality across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Load Latest Posts on Homepage
    const latestPostsContainer = document.getElementById('latestPosts');
    if (latestPostsContainer) {
        loadLatestPosts();
    }
    
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterBtn = newsletterForm.querySelector('.btn');
        const newsletterInput = document.getElementById('newsletterEmail');
        
        if (newsletterBtn && newsletterInput) {
            newsletterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const email = newsletterInput.value.trim();
                if (!validateEmail(email)) {
                    showToast('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate newsletter subscription
                newsletterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
                newsletterBtn.disabled = true;
                
                setTimeout(() => {
                    newsletterBtn.innerHTML = 'Subscribed!';
                    newsletterBtn.style.backgroundColor = '#10b981';
                    newsletterInput.value = '';
                    showToast('Successfully subscribed to newsletter!', 'success');
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        newsletterBtn.innerHTML = 'Subscribe';
                        newsletterBtn.style.backgroundColor = '';
                        newsletterBtn.disabled = false;
                    }, 2000);
                }, 1000);
            });
        }
    }
    
    // Initialize tooltips for social share buttons
    initializeTooltips();
    
    // Add fade-in animation to elements on scroll
    initScrollAnimations();
});

/**
 * Load latest posts for homepage
 */
async function loadLatestPosts() {
    try {
        const response = await fetch('data/posts.json');
        const posts = await response.json();
        
        const latestPostsContainer = document.getElementById('latestPosts');
        if (!latestPostsContainer) return;
        
        // Get only latest 4 posts
        const latestPosts = posts.slice(0, 4);
        
        latestPostsContainer.innerHTML = latestPosts.map(post => `
            <a href="post.html" class="post-card fade-in">
                <div class="post-image">
                    <i class="${post.icon}"></i>
                </div>
                <div class="post-content">
                    <span class="post-category">${post.category}</span>
                    <h3>${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span>${post.date}</span>
                        <span>${post.readTime}</span>
                    </div>
                </div>
            </a>
        `).join('');
        
    } catch (error) {
        console.error('Error loading posts:', error);
        document.getElementById('latestPosts').innerHTML = `
            <div class="error-message">
                <p>Unable to load posts at the moment. Please try again later.</p>
            </div>
        `;
    }
}

/**
 * Email validation helper
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        z-index: 9999;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Add close button functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
    
    document.body.appendChild(toast);
    
    // Add CSS animations
    if (!document.querySelector('#toast-animations')) {
        const style = document.createElement('style');
        style.id = 'toast-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .toast-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0;
                font-size: 1rem;
            }
            .toast-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Initialize tooltips
 */
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[aria-label]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('aria-label');
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                white-space: nowrap;
                z-index: 10000;
                pointer-events: none;
                transform: translateY(-100%) translateX(-50%);
                left: 50%;
                top: -5px;
            `;
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 10}px`;
            
            document.body.appendChild(tooltip);
            
            // Remove tooltip on mouse leave
            this.addEventListener('mouseleave', function() {
                tooltip.remove();
            }, { once: true });
        });
    });
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.animation = 'fadeIn 0.6s ease forwards';
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

/**
 * Format date to readable format
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions available globally for other scripts
window.EduEarn = {
    showToast,
    validateEmail,
    formatDate,
    debounce
};