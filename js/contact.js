/**
 * Contact Page JavaScript
 * Handles form validation and submission
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        setupContactForm();
    }
});

/**
 * Setup contact form with validation
 */
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            submitContactForm();
        }
    });
    
    // Real-time validation for each field
    const formFields = ['name', 'email', 'subject', 'message'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => validateField(fieldId));
            field.addEventListener('input', () => clearError(fieldId));
        }
    });
}

/**
 * Validate entire contact form
 */
function validateContactForm() {
    let isValid = true;
    
    // Validate each field
    isValid = validateField('name') && isValid;
    isValid = validateField('email') && isValid;
    isValid = validateField('subject') && isValid;
    isValid = validateField('message') && isValid;
    
    return isValid;
}

/**
 * Validate individual form field
 */
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (!field || !errorElement) return true;
    
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldId) {
        case 'name':
            if (!field.value.trim()) {
                errorMessage = 'Name is required';
                isValid = false;
            } else if (field.value.trim().length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
            break;
            
        case 'email':
            if (!field.value.trim()) {
                errorMessage = 'Email is required';
                isValid = false;
            } else if (!EduEarn.validateEmail(field.value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;
            
        case 'subject':
            if (!field.value) {
                errorMessage = 'Please select a subject';
                isValid = false;
            }
            break;
            
        case 'message':
            if (!field.value.trim()) {
                errorMessage = 'Message is required';
                isValid = false;
            } else if (field.value.trim().length < 10) {
                errorMessage = 'Message must be at least 10 characters';
                isValid = false;
            } else if (field.value.trim().length > 1000) {
                errorMessage = 'Message must be less than 1000 characters';
                isValid = false;
            }
            break;
    }
    
    // Update UI
    if (!isValid) {
        field.style.borderColor = '#ef4444';
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    } else {
        clearError(fieldId);
    }
    
    return isValid;
}

/**
 * Clear error for a field
 */
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.style.borderColor = '#d1d5db';
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

/**
 * Submit contact form
 */
function submitContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable submit button and show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form (for demo purposes)
        form.reset();
        
        // Show success toast
        EduEarn.showToast('Message sent successfully! We\'ll respond within 24-48 hours.', 'success');
        
    }, 1500);
}

/**
 * Reset form after successful submission
 */
function resetForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    // Show form, hide success message
    form.style.display = 'block';
    successMessage.style.display = 'none';
    
    // Reset button state
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = 'Send Message';
    submitBtn.disabled = false;
    
    // Clear all errors
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
        clearError(fieldId);
    });
}

// Make resetForm available globally
window.resetForm = resetForm;