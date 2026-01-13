# 🤝 תרומה לפרויקט

תודה שאתה מעוניין לתרום! בואו נשמור על הקוד חזק, נקי וקריא.

## שלבים להתחלה

1. **Fork את הפרויקט**
   ```bash
   git clone https://github.com/your-username/Agassi-Kerkasi.git
   cd Agassi-Kerkasi
   ```

2. **יצור branch חדש**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **עדכן את הקוד שלך**
   ```bash
   npm install
   npm run dev
   ```

## Convention ודרישות

### Naming
- Components: `PascalCase` (e.g., `ServiceCard.tsx`)
- Files: kebab-case for styles (e.g., `service-card.module.css`)
- Variables: camelCase (e.g., `handleClick`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)

### Code Style
```bash
# Format code
npm run lint

# Type checking
npm run type-check
```

### Commit Messages
עקוב אחר Conventional Commits:

```bash
git commit -m "feat: add booking form"
git commit -m "fix: resolve QR code generation bug"
git commit -m "docs: update README"
git commit -m "style: refactor CSS modules"
git commit -m "test: add unit tests for Button"
git commit -m "chore: update dependencies"
```

### Types

כל קובץ TypeScript חייב להיות type-safe:

```typescript
// ❌ Bad
function handleClick(value) {
  return value * 2;
}

// ✅ Good
function handleClick(value: number): number {
  return value * 2;
}
```

### Components

תמפלט component:

```typescript
import React from 'react';
import styles from './MyComponent.module.css';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

/**
 * MyComponent
 * Description of what this component does
 */
const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onClick,
  variant = 'primary',
}) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  );
};

export default MyComponent;
```

### CSS

עוקב אחר BEM naming (בתוך CSS Modules):

```css
.button {
  /* base styles */
}

.button--primary {
  /* primary variant */
}

.button:hover {
  /* hover state */
}

@media (max-width: 768px) {
  .button {
    /* mobile styles */
  }
}
```

## Testing

בעת הוספת feature:

1. **בדוק בפיתוח**
   ```bash
   npm run dev
   # Check visually in browser
   ```

2. **בדוק בבניה**
   ```bash
   npm run build
   npm run preview
   ```

3. **בדוק בעברית RTL**
   - טקסט צריך לזרום מימין לשמאל

4. **בדוק Accessibility**
   - Tab navigation
   - Screen reader
   - Contrast

5. **בדוק Responsive**
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1024px+)

## Pull Request Process

1. **עדכן את `README.md`** (אם הוספת features)

2. **בדוק את ה-build**
   ```bash
   npm run build
   ```

3. **שים PR תיאור**
   ```markdown
   ## Description
   Briefly describe changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   How was this tested?

   ## Screenshots (if applicable)
   ```

4. **מתן רשות ל-review**
   - Maintainers יבדקו את הקוד
   - Address comments
   - Merge!

## Issues

### Bug Reports
כלול:
- קוד שמשכפל את הבעיה
- Expected behavior
- Actual behavior
- Browser/device info

### Feature Requests
תאר:
- הבעיה שאתה פותר
- Proposed solution
- Alternative solutions

## Development Guidelines

### Performance
- ❌ Avoid inline styles
- ❌ Don't render large lists without virtualization
- ✅ Use CSS Modules
- ✅ Use React.memo for expensive components

### Accessibility
- ✅ All buttons/links have ARIA labels
- ✅ Keyboard navigation works
- ✅ Color contrast >= 4.5:1
- ✅ No auto-playing media

### Security
- ❌ Don't commit secrets/env vars
- ❌ Don't use dangerouslySetInnerHTML
- ✅ Validate user input
- ✅ Use type-safe code

### Localization
- Use Hebrew text throughout
- Support RTL layout
- Don't hardcode English text

## Tools

### VSCode Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- TypeScript Vue Plugin
- Prettier - Code formatter
- ESLint
- CSS Modules

### Run Formatter
```bash
npm run format
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── sections/       # Page sections
├── types/          # TypeScript types
├── hooks/          # Custom React hooks (future)
├── utils/          # Utility functions (future)
└── assets/         # Images, icons (future)
```

### Adding New Component

1. Create folder in `components/`
2. Create `.tsx` file
3. Create `.module.css` file
4. Create interface for props
5. Export from component

Example:
```bash
src/components/
├── NewComponent.tsx
├── NewComponent.module.css
```

## Tests

כשנוסיף test framework:

```bash
# Run tests
npm run test

# With coverage
npm run test:coverage
```

## Documentation

כל function/component צריך JSDoc:

```typescript
/**
 * Formats a phone number to international format
 * @param phone - Phone number string (e.g., "0507000000")
 * @returns Formatted number (e.g., "+972-50-700-0000")
 */
function formatPhone(phone: string): string {
  // implementation
}
```

## Deployment

Before deploying:
1. All tests pass
2. No TypeScript errors
3. No ESLint warnings
4. Accessibility audit passes
5. Performance audit passes (>90 score)

## Support

❓ שאלות?
- צור Discussion ב-GitHub
- שלח אימייל: contact@agsi-circasi.co.il
- וואטסאפ: https://wa.me/+972507000000

## Code of Conduct

- Be respectful
- Be inclusive
- Report harassment
- Focus on the code, not the person

---

💜 תודה על תרומתך!
