# Real Life World Inc. — Website

A full React website for Real Life World Inc., built with React Router, modular CSS, and a deep gold-on-dark theme.

---

## Project Structure

```
rlw-website/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Shared UI components
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Logo.jsx   / .css
│   │   ├── Button.jsx / .css
│   │   ├── PageHero.jsx / .css
│   │   └── CTABanner.jsx / .css
│   ├── pages/               # One file per route
│   │   ├── Home.jsx      / Home.css
│   │   ├── About.jsx     / About.css
│   │   ├── Chapters.jsx  / Chapters.css
│   │   ├── Resources.jsx / Resources.css
│   │   ├── Events.jsx    / Events.css
│   │   ├── Gallery.jsx   / Gallery.css
│   │   ├── Contact.jsx   / Contact.css
│   │   └── Support.jsx   / Support.css
│   ├── styles/
│   │   └── globals.css      # CSS variables, resets, utility classes
│   ├── App.jsx              # Router + layout shell
│   └── index.js             # React entry point
└── package.json
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```
Output goes to the `build/` folder — deploy to Netlify, Vercel, or any static host.

---

## Pages & Routes

| Route         | Page         | Description                              |
|---------------|--------------|------------------------------------------|
| `/`           | Home         | Hero, About teaser, Programs, Events, CTA |
| `/about`      | About        | Vision, Mission, Beliefs, Leadership     |
| `/chapters`   | Chapters     | World map, chapter grid, testimonials    |
| `/resources`  | Resources    | Teachings, devotionals, newsletter sub   |
| `/events`     | Events       | Filterable events grid + subscribe       |
| `/gallery`    | Gallery      | Featured moments + photo grid            |
| `/contact`    | Contact      | Contact form, info, pastoral booking     |
| `/support`    | Support      | Partnership, camp sponsorship, offerings |

---

## Design Tokens (CSS Variables)

All colours, fonts, and spacing live in `src/styles/globals.css`:

```css
--gold:         #c9a84c   /* Primary accent */
--gold-light:   #e8c96a
--purple:       #2d1b6b   /* Card & section backgrounds */
--purple-deep:  #1a0f3c
--dark:         #0d0b1a   /* Alternating section bg */
--dark2:        #110e22
--font-accent:  'Playfair Display', serif   /* Headings */
--font-display: 'Cinzel', serif             /* Logo / display */
--font-body:    'Inter', sans-serif
```

---

## Customisation

- **Logo / Brand name** → `src/components/Logo.jsx`
- **Nav links** → `src/components/Navbar.jsx` (`NAV_LINKS` array)
- **Colours** → `src/styles/globals.css` (`:root` block)
- **Contact details** → `src/pages/Contact.jsx` (`CONTACT_INFO` array)
- **Chapter listings** → `src/pages/Chapters.jsx` (`CHAPTERS` array)
- **Events** → `src/pages/Events.jsx` (`EVENTS` array)
- **Gallery photos** → `src/pages/Gallery.jsx` (replace placeholder tiles with `<img>` tags)

---

## Adding Real Photos

Gallery tiles are currently placeholder coloured blocks. To add real images:

```jsx
// In Gallery.jsx, replace the tile div with:
<img
  src="/images/camp-meeting.jpg"
  alt="Camp Meeting"
  style={{ width: '100%', height: 155, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
/>
```

Place images in `public/images/`.

---

## Deployment

### Netlify (drag & drop)
1. Run `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npx vercel
```

### GitHub Pages (with react-scripts)
Add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`, then:
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

---

*Real Life World Inc. © All Rights Reserved*
