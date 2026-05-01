/**
 * Navbar Active State Manager
 * Automatically highlights the current page in the navigation
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Map of pages to their corresponding nav link IDs
    // For sub-pages (vs-attack, manager-mode, head-to-head), highlight strategies
    const pageMapping = {
        'index.html': null, // Special - handled by hash or default
        'leaks.html': 'nav-leaks',
        'stratergies.html': 'nav-strategies',
        'reviews.html': 'nav-reviews',
        'vs-attack.html': 'nav-strategies',
        'manager-mode.html': 'nav-strategies',
        'head-to-head.html': 'nav-strategies'
    };
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links first
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // For index.html, check URL hash or default to home
    if (currentPage === 'index.html' || currentPage === '') {
        const hash = window.location.hash;
        
        // Map hash values to nav IDs for index.html sections
        const hashMapping = {
            '#strategies': 'nav-strategies',
            '#showcase': 'nav-leaks',
            '#reviews': 'nav-reviews',
            '#hero': 'nav-home',
            '#discord': 'nav-home'
        };
        
        const activeNavId = hashMapping[hash] || 'nav-home';
        const activeLink = document.getElementById(activeNavId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } else {
        // For other pages, use the page mapping
        const activeNavId = pageMapping[currentPage] || 'nav-home';
        const activeLink = document.getElementById(activeNavId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// Also handle hash changes for single-page navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // Map hash values to nav IDs
    const hashMapping = {
        '#strategies': 'nav-strategies',
        '#showcase': 'nav-leaks',
        '#reviews': 'nav-reviews',
        '#hero': 'nav-home',
        '#discord': 'nav-home',
        '': 'nav-home',
        '#': 'nav-home'
    };
    
    const activeNavId = hashMapping[hash] || 'nav-home';
    const activeLink = document.getElementById(activeNavId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});
