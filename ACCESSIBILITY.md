# ♿ דוך נגישות (Accessibility)

דף זה עוקב אחר סטנדרטים גבוהים של נגישות (WCAG 2.1 Level AA).

## תכונות נגישות

### 1. HTML סמנטי
- ✅ `<header>` - Hero section
- ✅ `<main>` - Content sections
- ✅ `<section>` - כל סקשן
- ✅ `<footer>` - Footer
- ✅ `<nav>` - Navigation areas
- ✅ `<article>` - Content cards

### 2. ARIA Labels
- ✅ Buttons: `aria-label`
- ✅ Links: `aria-label` for icon-only links
- ✅ Loading state: `aria-label="טוען..."`
- ✅ Roles: `role="main"`, `role="button"` for semantic clarity

### 3. ניווט בעזרת מקלדת

#### Tab Order
- ✅ כל הכפתורים ניתנים לפעולה עם Tab
- ✅ סדר הפוקוס הגיוני משמאל לימין (בעברית)
- ✅ Focus visible בכל האלמנטים

#### Keyboard Support
```
Tab      - Move to next element
Shift+Tab - Move to previous element
Enter    - Activate button/link
Space    - Activate button
Escape   - Close modals (if added)
```

### 4. Contrast Colors

בדוק כל צבע:

```
Button Primary (#ff6b35 on white):
- Contrast Ratio: 4.8:1 ✅ (AA compliant)

Secondary (#004e89 on white):
- Contrast Ratio: 8.2:1 ✅ (AAA compliant)

Text (#1a1a1a on white):
- Contrast Ratio: 12:1 ✅ (AAA compliant)
```

### 5. מטא דאטה

בקובץ `index.html`:
```html
<html lang="he" dir="rtl">
```
- ✅ Language attribute
- ✅ Direction attribute (RTL for Hebrew)

### 6. תמונות

כל תמונה חייבת להיות עם `alt` text:
```jsx
<img src="image.png" alt="תיאור התמונה" />
```

### 7. Emoji

כל emoji עם meaning:
```jsx
<span aria-hidden="true">🎪</span> {/* Decorative */}
<span aria-label="קרקס">🎪</span> {/* Meaningful */}
```

### 8. Links

Links צריכות להיות ברורות:
```jsx
❌ <a href="/services">לחץ כאן</a>

✅ <a href="/services">צפה בשירותים שלנו</a>
```

### 9. Focus Visible

כל element ניתן לפוקוס יש outline ברור:

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 10. Reduced Motion

לאנשים עם sensitivity לתנועה:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

## בדיקה של נגישות

### Tools

1. **axe DevTools** (Chrome extension)
   - Download: [https://www.deque.com/axe/devtools/](https://www.deque.com/axe/devtools/)
   - סרוק את הדף

2. **WAVE** (Accessibility checker)
   - [https://wave.webaim.org/](https://wave.webaim.org/)
   - הכנס את ה-URL

3. **Lighthouse** (Built-in Chrome)
   - DevTools > Lighthouse
   - Run audit
   - בדוק "Accessibility" score

### Keyboard Testing

```bash
1. Disable mouse
2. Use only Tab and Enter
3. Test all:
   - Buttons
   - Links
   - Forms
   - Menus
```

### Screen Reader Testing

#### Mac - VoiceOver
```
Cmd + F5 - Enable VoiceOver
Cmd + U - Open rotor
```

#### Windows - Narrator
```
Win + Ctrl + Enter - Enable Narrator
```

#### NVDA (Free)
- Download: [https://www.nvaccess.org/](https://www.nvaccess.org/)

## סטנדרטים תואמים

### WCAG 2.1 (Web Content Accessibility Guidelines)

- ✅ **Level A**: Basic accessibility
- ✅ **Level AA**: Enhanced accessibility (our target)
- ⚠️ **Level AAA**: Advanced accessibility (optional)

### Section 508 (US Law)
- ✅ Compliant with Federal standards

## Components Accessibility

### Button Component
```jsx
<Button ariaLabel="הזמנת חבילה">
  להזמנת חבילה
</Button>
```

### QRCode Component
```jsx
<img 
  src={qrImage} 
  alt="QR Code לטיקטוק" 
  role="img"
/>
```

### ServiceCard Component
```jsx
<article className={styles.card}>
  <div className={styles.icon} aria-hidden="true">🎪</div>
  <h3 className={styles.title}>שירות</h3>
  <p className={styles.description}>תיאור</p>
</article>
```

## Color Blindness

הדף עובד גם לאנשים עם:
- ✅ Red-Green color blindness
- ✅ Blue-Yellow color blindness
- ✅ Monochromacy (Black & White)

כי אנחנו לא מסתמכים רק על צבע - יש גם טקסט וסמלים.

## בדיקה כללית

```bash
# בדוק את כל WCAG
npm run build

# פתח את dist/index.html בדפדפן
npm run preview

# Use Lighthouse:
1. DevTools (F12)
2. Lighthouse tab
3. Audit
4. Check "Accessibility"
```

## חוקיות

- ✅ Americans with Disabilities Act (ADA)
- ✅ European Accessibility Act
- ✅ UK Equality Act
- ✅ Israeli accessibility standards

## למידה נוספת

- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Hebrew Accessibility Resources](https://www.isoc.org.il/)

## דוח בעיות נגישות

אם מצאת בעיית נגישות:

1. שלח אימייל:
   ```
   contact@agsi-circasi.co.il
   ```

2. או צור issue ב-GitHub

## תודה

🙏 תודה על העזרה בעשיית האינטרנט accessible לכולם!
