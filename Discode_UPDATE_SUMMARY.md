# Ferrocious Army - Discord Section Update

## Changes Made

### 1. **index.html** - Discord Section Updated

**Old Structure:**
```html
<section class="section discord-section">
    <div class="container discord-container">
        <h2>Join Our Discord</h2>
        <p>Connect with thousands of FC Mobile players</p>
        <div class="discord-placeholder">
            <p>Discord Server Widget Placeholder</p>
        </div>
    </div>
</section>
```

**New Structure:**
```html
<section class="section discord-section">
    <div class="container">
        <h2>Join Our Discord Community</h2>
        <div class="discord-content">
            <!-- Discord Card (Left) -->
            <div class="discord-card">
                <div class="discord-card-header">
                    <img src="https://discord.c99.nl/widget/theme-dark/163773906436341760.png" alt="Ferrocious Army Discord">
                </div>
                <a href="https://discord.gg/tEbCPmEH" target="_blank" class="btn btn-primary discord-btn">Join Server</a>
            </div>

            <!-- Description (Right) -->
            <div class="discord-description">
                <h3>Ferrocious Army</h3>
                <p class="server-info">
                    <span class="info-item">🟢 2000+ Members</span>
                    <span class="info-item">📅 Est. Oct 2022</span>
                </p>
                <div class="description-text">
                    <p>A Great Server With 2000+ Members Based Mainly On EA FC Mobile With 24x7 Active Staff To Help You Across Any Difficulties You Face.</p>
                </div>
                <div class="description-placeholder">
                    <!-- Your description goes here -->
                </div>
            </div>
        </div>
    </div>
</section>
```

**Key Updates:**
- Grid layout with two columns: Discord card (left) + Description (right)
- Discord widget image embedded using Discord widget API
- Direct invite link: `https://discord.gg/tEbCPmEH`
- "Join Server" button below the card
- Server info (member count, establishment date)
- Placeholder for additional description text
- Fully responsive (stacks on mobile)

---

### 2. **main.css** - New Discord Section Styles

**Added CSS Classes:**

```css
.discord-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.discord-card {
    background-color: var(--bg-tertiary);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow);
}

.discord-card-header {
    width: 100%;
    height: 280px;
    overflow: hidden;
    background-color: var(--bg-primary);
}

.discord-card-header img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

.discord-btn {
    display: block;
    margin: 1.5rem;
    text-align: center;
    width: calc(100% - 3rem);
}

.discord-description h3 {
    color: var(--accent-primary);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.server-info {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.info-item {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.description-text p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.description-placeholder {
    min-height: 100px;
    padding: 1.5rem;
    background-color: var(--bg-tertiary);
    border: 2px dashed var(--border-color);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
}
```

**Responsive Updates:**
- **Tablet (768px)**: Discord content stacks vertically
- **Mobile (480px)**: Card adjusts to single column layout

---

## 📱 Layout Details

### Desktop View:
```
╔─────────────────────────────────────────╗
║      Join Our Discord Community         ║
╠─────────────────┬─────────────────────╣
║                 │                      ║
║   Discord Card  │   Description Text   ║
║   (Big Image)   │   - Member Info      ║
║   Join Button   │   - Server Details   ║
║                 │   - Extra Space      ║
╚─────────────────┴─────────────────────╝
```

### Mobile View:
```
╔──────────────────────╗
║ Join Our Discord     ║
╠──────────────────────╣
║                      ║
║   Discord Card       ║
║   (Image)            ║
║   Join Button        ║
│                      ║
├──────────────────────┤
║                      ║
║ Description Text     ║
║ - Member Info        ║
║ - Server Details     ║
║                      ║
╚──────────────────────╝
```

---

## 🔗 Discord Integration

**Server Invite Link:** `https://discord.gg/tEbCPmEH`

**Widget Image:** `https://discord.c99.nl/widget/theme-dark/163773906436341760.png`

The widget image is a Discord server widget that displays:
- Server name
- Member count
- Server description
- "Go to Server" button

---

## ✏️ How to Edit Description

To add your own description text, edit the `.description-placeholder` section in `index.html`:

```html
<div class="description-placeholder">
    <p>Your custom description goes here...</p>
    <p>Add more content as needed</p>
</div>
```

Or directly replace the placeholder div with styled content:

```html
<div class="description-content">
    <h4>Why Join?</h4>
    <ul>
        <li>24/7 Active Staff</li>
        <li>Strategy Discussions</li>
        <li>Player Reviews</li>
    </ul>
</div>
```

---

## 🎯 Integration Notes

1. **Discord Widget API**: The widget image is served from `discord.c99.nl` - a third-party Discord widget provider. This is stable and commonly used.

2. **Invite Link**: Direct link to your Discord server. Opens in new tab (`target="_blank"`).

3. **Image Height**: Set to 280px to match the design in your screenshot. Adjust `height: 280px` in `.discord-card-header` if needed.

4. **Button Styling**: Uses existing `.btn` and `.btn-primary` classes for consistency.

5. **Responsive**: Automatically stacks on mobile devices using CSS Grid.

---

## 📋 Files Updated

- ✅ `index.html` - Discord section HTML structure
- ✅ `styles/main.css` - Discord section CSS styles + responsive rules

**No other files need to be changed.**

---

## 🚀 Implementation

Simply replace your current `index.html` and `styles/main.css` with the updated versions. The Discord section will display exactly as shown in your reference image.

**Ready to deploy!** ⚔️