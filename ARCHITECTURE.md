# 🏗️ ארכיטקטורת הפרויקט

תיאור של מבנה הקוד, design patterns, וזרימת הנתונים.

## High-Level Architecture

```
┌─────────────────────────────────────────┐
│           User Browser                   │
├─────────────────────────────────────────┤
│ React Application (Single Page App)     │
├────────────────────────────────────────┤
│ Vite (Build Tool & Dev Server)         │
├────────────────────────────────────────┤
│ Static Files (HTML, CSS, JS)           │
├────────────────────────────────────────┤
│ Netlify CDN                             │
└─────────────────────────────────────────┘
```

## Component Hierarchy

```
App (Root)
├── Hero (Section)
├── About (Section)
├── Services (Section)
│   ├── ServiceCard (Component) x6
├── WhyUs (Section)
│   ├── BenefitItem (Inline) x6
├── Contact (Section)
│   ├── Button (Component) x4
│   └── QRCodeComponent (Component)
└── Footer (Section)
    ├── Links (Inline)
    └── SocialLinks (Inline)
```

## Folder Structure & Responsibilities

```
src/
├── components/                    # Reusable UI Components
│   ├── Button.tsx                # Flexible button with variants
│   ├── Button.module.css         # Button styles (primary, secondary, outline)
│   ├── ServiceCard.tsx           # Service card with icon/title/desc
│   ├── ServiceCard.module.css    # Service card responsive styles
│   ├── QRCodeComponent.tsx       # QR code generator with download
│   └── QRCodeComponent.module.css
│
├── sections/                      # Full-width page sections
│   ├── Hero.tsx                  # Main headline & CTA
│   ├── Hero.module.css           # Hero animations & gradient
│   ├── About.tsx                 # Business description + stats
│   ├── About.module.css
│   ├── Services.tsx              # Service grid
│   ├── Services.module.css
│   ├── WhyUs.tsx                 # Benefits list
│   ├── WhyUs.module.css
│   ├── Contact.tsx               # Contact form area + QR
│   ├── Contact.module.css        # Orange gradient background
│   ├── Footer.tsx                # Footer with links
│   └── Footer.module.css
│
├── types/                         # TypeScript Type Definitions
│   └── index.ts                  # Service, Benefit, ContactInfo interfaces
│
├── hooks/                         # Custom React Hooks (Future)
│   └── .gitkeep
│
├── utils/                         # Utility Functions (Future)
│   └── .gitkeep
│
├── assets/                        # Static Assets
│   ├── images/                   # Image files
│   └── icons/                    # SVG icons
│
├── styles/                        # Global Styles (Future)
│   └── .gitkeep
│
├── App.tsx                        # Root component with Suspense
├── App.css                        # App-level styles + animations
├── main.tsx                       # React DOM entry point
├── index.css                      # Global CSS variables & reset
│
index.html                         # HTML template
vite.config.ts                    # Build configuration
tsconfig.json                     # TypeScript config
netlify.toml                      # Netlify deployment config
```

## Data Flow

### Props-Based (No Global State)

```
App
  ├─ Hero
  │   └─ Button (href, onClick props)
  ├─ Services
  │   └─ ServiceCard (data passed as props)
  ├─ Contact
  │   ├─ Button (href, onClick)
  │   └─ QRCodeComponent (value prop)
  └─ Footer
      └─ Links from inline data
```

### Why No Redux/Context?
- Single Page App = Simple data
- No complex state management needed
- Props are sufficient
- Easier to test and maintain

## Design Patterns

### 1. Functional Components
- All components are functional (no class components)
- Hooks for any side effects
- Composition over inheritance

### 2. Props with Interfaces
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
```

### 3. CSS Modules for Scoping
- No global CSS class names
- Prevents naming conflicts
- Better maintainability
- Type-safe class names (through generated types)

### 4. Animation Classes
- Keyframes in global `App.css`
- Applied via className in sections
- Used: slideInUp, slideInLeft, slideInRight, fadeIn, float

### 5. Responsive Design
- Mobile-first approach
- CSS custom properties for breakpoints
- Flexbox and CSS Grid for layouts

## Technology Stack Rationale

### React 19
- Modern hooks API
- Latest optimizations
- Good community support

### TypeScript
- Prevents runtime errors
- Better IDE support
- Self-documenting code

### Vite
- Super fast dev server (HMR)
- Smaller bundle size than CRA
- Modern ESM approach
- Simple configuration

### CSS Modules
- Scoped styles (no conflicts)
- Better performance
- Developer experience

### No External UI Library
- Lighter bundle
- Full control over design
- Learning opportunity
- Custom theme colors

## Performance Optimizations

### 1. Code Splitting
- Components are small and focused
- Ready for React.lazy() if needed
- Efficient tree-shaking

### 2. CSS Optimizations
- CSS Modules + scoping
- Minimal CSS (no framework bloat)
- Minification in build

### 3. Build Configuration
- Terser minification
- Source maps disabled in production
- Asset optimization

### 4. Image Handling
- Lazy loading ready
- PNG for QR code (small size)
- Emoji for icons (no image files)

## Security Considerations

### 1. XSS Prevention
- React auto-escapes JSX
- No dangerouslySetInnerHTML
- Safe QR code generation

### 2. Input Validation
- TypeScript prevents type errors
- No form submission (links only)
- Safe href attributes

### 3. No Sensitive Data
- No passwords stored
- Links are public URLs
- QR code is safe

## Routing Strategy

### Current: SPA Navigation
```javascript
// Smooth scroll to sections
const handleBookingClick = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Future: React Router
```typescript
// When moving to multi-page app:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

## State Management Strategy

### Current: Props Only
- Simple and sufficient
- No Redux/Context overhead
- Easy to understand

### Future: If Needed
1. Context API (small state)
2. Zustand (medium state)
3. Redux (complex state)

## Testing Strategy

### Unit Tests (Future)
```bash
npm install --save-dev vitest @testing-library/react
```

### E2E Tests (Future)
```bash
npm install --save-dev playwright
```

### Currently
- Manual testing via `npm run dev`
- Visual regression checks

## CI/CD Pipeline

### Netlify Deployment
1. Push to `main` branch
2. Netlify detects change
3. Run `npm run build`
4. Deploy `dist/` folder
5. Tests run (can be added)

### Future Enhancements
- Pre-deployment tests
- Performance budgets
- Automated accessibility checks
- Image optimization

## Bundle Analysis

```bash
npm install --save-dev rollup-plugin-visualizer
```

Then check bundle size with:
```bash
npm run build -- --analyze
```

## Maintenance

### Regular Updates
```bash
npm outdated        # Check for updates
npm update          # Update packages
npm audit           # Check for vulnerabilities
```

### Type Checking
```bash
npm run type-check  # Run tsc without emitting
```

### Code Quality
```bash
npm run lint        # Check code style
```

## Future Architecture Decisions

1. **Multi-page App**: React Router
2. **Backend**: Node.js + Express
3. **Database**: MongoDB or PostgreSQL
4. **API**: RESTful or GraphQL
5. **Authentication**: Firebase or Auth0
6. **Payments**: Stripe integration
7. **CMS**: Contentful or Strapi

## Design System (Living Document)

### Color Palette
- Primary: #ff6b35 (Orange)
- Secondary: #004e89 (Navy)
- Accent: #f7b801 (Gold)

### Typography
- Font: Segoe UI, system fonts
- Headings: Bold, tight line-height
- Body: Regular, relaxed line-height

### Spacing
- Base unit: 1rem (16px)
- Scale: 0.25x, 0.5x, 1x, 1.5x, 2x, 3x

### Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px

---

💡 Questions about architecture? Open a discussion or issue!
