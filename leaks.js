/**
 * Leaks Gallery - Dynamic Image Loading
 * Automatically loads the latest 4 images from the Leaks folder
 * Sorted by date (newest first) based on filename timestamps
 */

// Leaks folder path
const LEAKS_FOLDER = 'Leaks/';

// Hardcoded list of leak images (in a real app, this would be fetched from server)
// These are the 4 images currently in the Leaks folder
const leakImages = [
    { filename: 'Screenshot_2026-04-30-11-36-34-60_40deb401b9ffe8e1df2f1cc5ba480b12.jpg', date: '2026-04-30' },
    { filename: 'Screenshot_20260429_003335.jpg', date: '2026-04-29' },
    { filename: 'Screenshot_2026_0425_095858.png', date: '2026-04-25' },
    { filename: 'Screenshot_2026-04-24-13-33-53-107_com.twitter.android-edit.jpg', date: '2026-04-24' }
];

/**
 * Parse date from filename for sorting
 * Handles various filename formats:
 * - Screenshot_2026-04-30-11-36-34-60_... (ISO format with dashes)
 * - Screenshot_20260429_003335 (compact format)
 * - Screenshot_2026_0425_095858 (underscore format)
 */
function parseDateFromFilename(filename) {
    // Try to extract date from filename
    // Format 1: Screenshot_2026-04-30-11-36-34-60_...
    let match = filename.match(/Screenshot_(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
        return new Date(match[1], match[2], match[3]);
    }
    
    // Format 2: Screenshot_20260429_003335
    match = filename.match(/Screenshot_(\d{4})(\d{2})(\d{2})/);
    if (match) {
        return new Date(match[1], match[2], match[3]);
    }
    
    // Format 3: Screenshot_2026_0425_095858
    match = filename.match(/Screenshot_(\d{4})_(\d{2})(\d{2})/);
    if (match) {
        return new Date(match[1], match[2], match[3]);
    }
    
    // Default to old date if can't parse
    return new Date(2000, 0, 1);
}

/**
 * Sort images by date (newest first)
 */
function sortByDate(images) {
    return images.sort((a, b) => {
        const dateA = parseDateFromFilename(a.filename);
        const dateB = parseDateFromFilename(b.filename);
        return dateB - dateA; // Descending order (newest first)
    });
}

/**
 * Get the latest 4 images
 * This is the algorithm: always show the 4 most recent images
 * When a new image is added, it automatically appears first
 * The oldest of the 4 is removed when a new one is added
 */
function getLatestLeaks(maxCount = 4) {
    const sorted = sortByDate([...leakImages]);
    return sorted.slice(0, maxCount);
}

/**
 * Render leak image card
 */
function renderLeakCard(image, index) {
    const card = document.createElement('div');
    card.className = 'image-card';
    
    const img = document.createElement('img');
    img.src = LEAKS_FOLDER + image.filename;
    img.alt = `Leak ${index + 1} - ${image.date}`;
    img.loading = 'lazy';
    
    card.appendChild(img);
    return card;
}

/**
 * Initialize the leaks gallery
 */
function initLeaksGallery() {
    const grid = document.getElementById('leaksGrid');
    if (!grid) {
        console.error('Leaks grid container not found!');
        return;
    }
    
    // Get latest 4 leaks
    const latestLeaks = getLatestLeaks(4);
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Render each image
    latestLeaks.forEach((image, index) => {
        const card = renderLeakCard(image, index);
        grid.appendChild(card);
    });
    
    console.log(`Loaded ${latestLeaks.length} leak images`);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLeaksGallery);
