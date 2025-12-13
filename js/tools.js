/**
 * Tools Page JavaScript
 * Handles tool filtering and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tools page
    initToolsPage();
});

/**
 * Initialize tools page functionality
 */
function initToolsPage() {
    // Setup filter buttons
    setupToolFilters();
    
    // Track tool clicks for analytics
    setupToolTracking();
}

/**
 * Setup tool filter buttons
 */
function setupToolFilters() {
    const filterButtons = document.querySelectorAll('.tools-filter .filter-btn');
    const toolCards = document.querySelectorAll('.tool-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.category;
            
            // Show/hide tool cards based on filter
            toolCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Setup tool click tracking
 */
function setupToolTracking() {
    const toolLinks = document.querySelectorAll('.tool-link');
    
    toolLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const toolName = this.closest('.tool-card').querySelector('h3').textContent;
            const toolCategory = this.closest('.tool-card').dataset.category;
            
            // Log tool click (could be sent to analytics)
            console.log('Tool clicked:', {
                name: toolName,
                category: toolCategory,
                url: this.href
            });
            
            // Add a small delay to allow tracking before navigation
            setTimeout(() => {
                // Navigation happens automatically via link href
            }, 100);
        });
    });
}

/**
 * Check if tool is bookmarked
 */
function toggleBookmark(toolId) {
    const bookmarks = JSON.parse(localStorage.getItem('tool-bookmarks')) || [];
    const index = bookmarks.indexOf(toolId);
    
    if (index === -1) {
        // Add bookmark
        bookmarks.push(toolId);
        EduEarn.showToast('Tool bookmarked!', 'success');
    } else {
        // Remove bookmark
        bookmarks.splice(index, 1);
        EduEarn.showToast('Bookmark removed', 'info');
    }
    
    localStorage.setItem('tool-bookmarks', JSON.stringify(bookmarks));
    return bookmarks;
}

/**
 * Get all bookmarked tools
 */
function getBookmarkedTools() {
    return JSON.parse(localStorage.getItem('tool-bookmarks')) || [];
}

// Make functions available globally if needed
window.toggleBookmark = toggleBookmark;
window.getBookmarkedTools = getBookmarkedTools;