/**
 * Learn Page JavaScript
 * Handles learning paths functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize learning paths
    initLearningPaths();
    
    // Setup FAQ functionality
    setupFAQ();
});

/**
 * Initialize learning paths functionality
 */
function initLearningPaths() {
    // Add click tracking for analytics (future implementation)
    const pathCards = document.querySelectorAll('.path-card a');
    
    pathCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Could add Google Analytics tracking here
            console.log('Learning path clicked:', this.closest('.path-card').querySelector('.path-title').textContent);
        });
    });
}

/**
 * Setup FAQ functionality
 */
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

/**
 * Track learning path progress (simulated)
 */
function trackLearningProgress(pathId, moduleId) {
    // This would normally interact with a backend
    // For static site, we can use localStorage
    
    const progressKey = `learning-progress-${pathId}`;
    let progress = JSON.parse(localStorage.getItem(progressKey)) || {};
    
    progress[moduleId] = true;
    localStorage.setItem(progressKey, JSON.stringify(progress));
    
    return progress;
}

/**
 * Get learning progress
 */
function getLearningProgress(pathId) {
    const progressKey = `learning-progress-${pathId}`;
    return JSON.parse(localStorage.getItem(progressKey)) || {};
}

/**
 * Reset learning progress
 */
function resetLearningProgress(pathId) {
    const progressKey = `learning-progress-${pathId}`;
    localStorage.removeItem(progressKey);
    EduEarn.showToast('Learning progress reset successfully!', 'success');
}

// Make functions available globally if needed
window.trackLearningProgress = trackLearningProgress;
window.getLearningProgress = getLearningProgress;
window.resetLearningProgress = resetLearningProgress;