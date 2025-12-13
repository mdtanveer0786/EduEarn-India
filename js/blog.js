/**
 * Blog Page JavaScript
 * Handles blog filtering, search, and loading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog functionality
    initBlog();
    
    // Check for category filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        setTimeout(() => {
            filterBlogByCategory(categoryParam);
        }, 100);
    }
});

/**
 * Initialize blog page functionality
 */
async function initBlog() {
    // Load blog posts
    await loadBlogPosts();
    
    // Setup filter buttons
    setupFilterButtons();
    
    // Setup search functionality
    setupSearch();
    
    // Setup load more button
    setupLoadMore();
}

/**
 * Load blog posts from JSON file
 */
async function loadBlogPosts() {
    try {
        const response = await fetch('data/posts.json');
        const posts = await response.json();
        
        window.blogPosts = posts; // Store globally
        window.currentPosts = [...posts]; // Copy for filtering
        window.displayedPosts = 6; // Initial number of posts to display
        
        renderBlogPosts(posts.slice(0, window.displayedPosts));
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blogGrid').innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3>Unable to Load Posts</h3>
                <p>Please check your internet connection and try again.</p>
                <button onclick="location.reload()" class="btn btn-primary mt-3">Retry</button>
            </div>
        `;
    }
}

/**
 * Render blog posts to the grid
 */
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    if (posts.length === 0) {
        blogGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #9ca3af; margin-bottom: 1rem;"></i>
                <h3>No Articles Found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
        `;
        return;
    }
    
    blogGrid.innerHTML = posts.map(post => `
        <a href="post.html" class="post-card fade-in" data-category="${post.category}">
            <div class="post-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="post-content">
                <span class="post-category">${post.category.replace('-', ' ')}</span>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </a>
    `).join('');
    
    // Add animation to new cards
    setTimeout(() => {
        const cards = blogGrid.querySelectorAll('.post-card');
        cards.forEach(card => {
            card.style.animationPlayState = 'running';
        });
    }, 100);
}

/**
 * Setup filter buttons functionality
 */
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Clear search input
            if (searchInput) {
                searchInput.value = '';
            }
            
            // Filter posts
            const category = this.dataset.category;
            filterBlogByCategory(category);
            
            // Update URL without reloading page
            const url = new URL(window.location);
            if (category === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', category);
            }
            window.history.pushState({}, '', url);
        });
    });
}

/**
 * Filter blog posts by category
 */
function filterBlogByCategory(category) {
    if (!window.blogPosts) return;
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter posts
    if (category === 'all') {
        window.currentPosts = [...window.blogPosts];
    } else {
        window.currentPosts = window.blogPosts.filter(post => 
            post.category === category
        );
    }
    
    // Reset displayed posts count
    window.displayedPosts = 6;
    
    // Render filtered posts
    renderBlogPosts(window.currentPosts.slice(0, window.displayedPosts));
    
    // Update load more button visibility
    updateLoadMoreButton();
}

/**
 * Setup search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    const performSearch = EduEarn.debounce(() => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm.length === 0) {
            // Reset to current filter
            const activeFilter = document.querySelector('.filter-btn.active');
            if (activeFilter) {
                filterBlogByCategory(activeFilter.dataset.category);
            }
            return;
        }
        
        // Filter posts by search term
        const filteredPosts = window.blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );
        
        window.currentPosts = filteredPosts;
        window.displayedPosts = 6;
        
        renderBlogPosts(filteredPosts.slice(0, window.displayedPosts));
        updateLoadMoreButton();
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
    }, 300);
    
    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
}

/**
 * Setup load more button
 */
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        loadMorePosts();
    });
    
    // Initial button state
    updateLoadMoreButton();
}

/**
 * Load more posts
 */
function loadMorePosts() {
    if (!window.currentPosts || !window.displayedPosts) return;
    
    window.displayedPosts += 6;
    renderBlogPosts(window.currentPosts.slice(0, window.displayedPosts));
    updateLoadMoreButton();
    
    // Scroll to show new posts
    const newPosts = document.querySelectorAll('.post-card');
    if (newPosts.length > 6) {
        newPosts[newPosts.length - 6].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

/**
 * Update load more button visibility
 */
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMore');
    if (!loadMoreBtn || !window.currentPosts) return;
    
    if (window.currentPosts.length <= window.displayedPosts) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

/**
 * Share button functionality
 */
function sharePost(platform, title, url) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Make functions available globally
window.sharePost = sharePost;