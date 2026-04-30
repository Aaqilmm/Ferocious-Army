# Ferrocious Army - FC Mobile Community Hub

A clean, scalable frontend framework for the Ferrocious Army community website. Built with pure HTML, CSS, and vanilla JavaScript—no frameworks, no bloat.

---

## 📁 Project Structure

```
ferrocious-army/
├── index.html                 # Homepage
├── pages/
│   ├── strategies.html        # Main strategies page
│   ├── vs-attack.html         # VS Attack subpage
│   ├── manager-mode.html      # Manager Mode subpage
│   ├── head-to-head.html      # Head to Head subpage
│   ├── reviews.html           # Player reviews page
│   └── leaks.html             # Leaks & updates page
├── styles/
│   ├── main.css               # Base styles, layout, components
│   ├── navbar.css             # Navigation bar styles
│   └── pages.css              # Page-specific styles
├── scripts/
│   ├── reviews.js             # Reviews page functionality (template)
│   └── leaks.js               # Leaks page functionality (template)
└── README.md                  # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary BG**: `#0a0e27` (Dark blue-black)
- **Secondary BG**: `#1a1f3a` (Slightly lighter)
- **Tertiary BG**: `#252d47` (Cards/emphasis)
- **Accent Primary**: `#00d4ff` (Cyan/blue)
- **Accent Secondary**: `#ff6b6b` (Red/warm)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a0aec0` (Light gray)

All colors are defined in CSS variables (`:root`) in `styles/main.css`. Update them there for consistent theming.

### Typography
- **Font Stack**: System fonts (clean, modern, fast-loading)
- **Heading Sizes**: 
  - `h1`: 3rem (hero), 2rem (pages)
  - `h2`: 2rem
  - `h3`: 1.5rem

### Components
- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`
- **Cards**: `.strategy-card`, `.large-card`, `.review-card-container`
- **Grids**: `.card-grid`, `.image-grid`, `.review-grid`
- **Sections**: `.section` for consistent spacing

---

## 🚀 Getting Started

### 1. Setup
No build process needed. Just open `index.html` in a browser or serve with any HTTP server.

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
http-server
```

Then navigate to `http://localhost:8000`

### 2. Navigation Structure
- **Homepage**: `index.html`
  - Hero section with CTA buttons
  - Logo placeholder
  - FC Mobile image showcase
  - Strategies preview cards
  - Discord widget placeholder
  - YouTube videos section

- **Strategies Hub**: `pages/strategies.html`
  - Three main strategy cards linking to subpages

- **Subpages** (VS Attack, Manager Mode, Head to Head):
  - Same layout with content placeholders
  - Ready for team guides and strategy text
  - Back-link to strategies page

- **Reviews**: `pages/reviews.html`
  - Grid layout ready for dynamic review cards
  - JavaScript template included for adding content

- **Leaks**: `pages/leaks.html`
  - List layout for leak items
  - JavaScript template for future updates

---

## 🔧 Customization Guide

### Update Colors
Edit `:root` variables in `styles/main.css`:

```css
:root {
    --bg-primary: #0a0e27;  /* Change primary background */
    --accent-primary: #00d4ff;  /* Change accent color */
    /* ... etc */
}
```

### Update Navigation
Edit the `<nav>` section in `index.html` and all page files. Update both:
1. The logo/brand name
2. Navigation links

### Add New Pages
1. Create new `.html` file in `/pages` folder
2. Copy the navbar and footer structure
3. Import `styles/main.css`, `styles/navbar.css`, and any custom styles
4. Add link to navbar in all pages

### Add Content to Strategy Subpages
1. Open `pages/vs-attack.html` (or other strategy pages)
2. Replace `.content-placeholder` divs with your actual content
3. Use `.subpage-content` container for consistent styling

### Populate Reviews Page
The `reviews.html` page has:
- Empty grid container with ID: `reviewsContainer`
- Template JavaScript file at `scripts/reviews.js`

To add reviews:
1. Define your review data (hardcoded, fetched from API, etc.)
2. Use the template function in `reviews.js` to render cards
3. Update CSS in `styles/pages.css` if needed

Example review object:
```javascript
{
    id: 1,
    playerName: "Example Player",
    position: "Striker",
    rating: 4.5,
    review: "Great player for...",
    pros: ["Speed", "Dribbling"],
    cons: ["Weak foot"]
}
```

### Populate Leaks Page
Similar to reviews, `leaks.html` has:
- Empty container with ID: `leaksContainer`
- Template JavaScript file at `scripts/leaks.js`

Example leak object:
```javascript
{
    id: 1,
    title: "New Player Release",
    date: "2024-04-25",
    content: "Description of the leak...",
    source: "Official Update",
    category: "players"
}
```

---

## 📱 Responsive Design

The framework includes **three breakpoints**:
- **Desktop**: Default (1200px max container)
- **Tablet**: `@media (max-width: 768px)`
- **Mobile**: `@media (max-width: 480px)`

All layouts automatically adjust. No manual work needed for most content.

---

## 🎯 Next Steps

### To Integrate Real Content:
1. **Homepage Images**: Replace placeholder divs with actual `<img>` tags
2. **Discord Widget**: Replace `.discord-placeholder` with official Discord widget embed code
3. **YouTube Videos**: Replace `.video-card` placeholders with actual YouTube embeds
4. **Reviews/Leaks**: Populate using JavaScript templates or API calls

### To Add Features:
- **Search functionality**: Add search bar to navbar + implement filter logic
- **Member directory**: Create new page with member cards
- **Event calendar**: Add calendar component for community events
- **Comments/feedback**: Integrate comment system (Disqus, Utterances, etc.)
- **Admin panel**: Create backend integration for content management

### To Deploy:
- Use Netlify, Vercel, GitHub Pages, or any static host
- No build process needed
- Simply push HTML/CSS/JS files

---

## 📝 File Structure Best Practices

### Naming Conventions
- **Pages**: lowercase with hyphens (`vs-attack.html`, not `VsAttack.html`)
- **CSS Classes**: BEM-style when needed (`.card__title`, `.btn--primary`)
- **IDs**: camelCase (`.getElementById('reviewsContainer')`)
- **Variables**: kebab-case in CSS (`:root { --accent-primary }`)

### CSS Organization
- **main.css**: Global styles, variables, base layout
- **navbar.css**: Navigation-specific styles only
- **pages.css**: Subpage layouts and components

Keep styles modular. Avoid specificity wars.

### JavaScript Organization
- One file per feature (reviews.js, leaks.js)
- Use descriptive function names
- Include comments for complex logic
- Keep templates separate from implementation

---

## 🐛 Troubleshooting

### Images not loading?
- Check file paths are relative (e.g., `../styles/main.css`)
- Ensure image files exist in correct folders
- Use `<img>` tags, not background-images for content

### Styles not applying?
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check CSS file paths in `<link>` tags
- Verify CSS variables are defined in `:root`

### Navigation not working?
- Check all file paths are correct
- Ensure pages are in `/pages` folder
- Verify navbar HTML is identical on all pages

---

## 📊 Performance Notes

- **No frameworks**: Fast load times, minimal dependencies
- **CSS variables**: Efficient theming, single source of truth
- **Semantic HTML**: Better SEO, accessibility
- **Mobile-first approach**: Progressive enhancement

Current page size: ~50KB (HTML + CSS) without images. Extremely lightweight.

---

## 🤝 Contributing Guidelines

When adding new pages/features:
1. Maintain the existing file structure
2. Use CSS variables for colors/spacing
3. Follow the responsive breakpoints
4. Test on mobile (use browser dev tools)
5. Keep code readable and commented

---

## 📄 License

Ferrocious Army Community Hub - 2024

---

## 📞 Support

For questions or issues:
- Check the customization guide above
- Ensure all file paths are relative
- Test in different browsers (Chrome, Firefox, Safari, Edge)

---

**Ready to build! Start with the placeholders and add your content. The framework is yours to customize.** ⚔️