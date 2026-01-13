# 🎪 אגסי קרקסי - Landing Page

דף נחיתה מודרני, מקצועי, רספונסיבי וממיר לעסק קרקסי "אגסי קרקסי".

## 📋 תוכן העניינים

- [תיאור](#תיאור)
- [תכונות](#תכונות)
- [טכנולוגיות](#טכנולוגיות)
- [התקנה](#התקנה)
- [פיתוח](#פיתוח)
- [בניה והפעלה](#בניה-והפעלה)
- [פריסה](#פריסה)
- [מבנה הפרויקט](#מבנה-הפרויקט)
- [הערות](#הערות)

## 📝 תיאור

אגסי קרקסי היא פלטפורמה להצגת שירותי קרקס מודרניים וממירים. הדף מציג את העסק, השירותים, ומעודד זוגים של קשר והזמנות דרך:

- 📱 טופס הזמנה
- 💬 קישור ישיר לוואטסאפ
- 📧 קישור דוא"ל
- 📸 קוד QR לסריקה מהירה

## ✨ תכונות

### עיצוב וחוויית משתמש
- ✅ עיצוב צבעוני ונקי עם אווירת קרקס מודרנית
- ✅ טיפוגרפיה ברורה וידידותית
- ✅ אנימציות עדינות (Fade, Slide, Hover)
- ✅ Responsive Design (Mobile First)

### גישוליות (Accessibility)
- ✅ HTML סמנטי (header, main, section, footer)
- ✅ תמיכה מלאה בניווט מקלדת
- ✅ aria-labels ו-roles כנדרש
- ✅ ניגודיות צבעים תקנית

### ביצועים
- ✅ Lazy Loading לקומפוננטות כבדות
- ✅ אופטימיזציית תמונות
- ✅ Minification ו-compression

### SEO
- ✅ כותרת עמוד וMeta description
- ✅ Open Graph tags
- ✅ Schema.org markup

## 💻 טכנולוגיות

- **React 18** - ספריית ה-UI
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool מודרני
- **CSS Modules** - Scoped styling
- **qrcode.react** - QR Code generation

## 🚀 התקנה

### דרישות מוקדמות
- Node.js >= 16.0.0
- npm >= 8.0.0

### שלבי התקנה

```bash
# שיבוט המאגר (אם טרם נעשה)
git clone https://github.com/Evyatar-Hazan/Agassi-Kerkasi.git
cd Agassi-Kerkasi

# התקנת התלויות
npm install
```

## 🛠️ פיתוח

### הרצת שרת הפיתוח

```bash
npm run dev
```

הדף יפתח בדפדפן בכתובת `http://localhost:5173`

### מצב HMR (Hot Module Replacement)
הקוד יכול להשתנות בזמן אמת ללא רענון דף.

## 🔨 בניה והפעלה

### בניה ל-Production

```bash
npm run build
```

הקבצים יהיו בתיקייה `dist/`

### טיוטוח לפני העלאה

```bash
npm run preview
```

## 🌐 פריסה

### Netlify (מומלץ)

1. **חיבור ל-GitHub**
   ```bash
   git push origin main
   ```

2. **הגדרה ב-Netlify**
   - התחבר ל-[Netlify](https://app.netlify.com/)
   - בחר "New site from Git"
   - בחר את המאגר `Agassi-Kerkasi`
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **פריסה אוטומטית**
   - כל push ל-`main` יבנה ויפרוס אוטומטית

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

ואחרי כן עדכן את `package.json`:
```json
{
  "homepage": "https://your-username.github.io/Agassi-Kerkasi",
  "scripts": {
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}
```

## 📁 מבנה הפרויקט

```
src/
├── components/              # רכיבים קטנים
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── ServiceCard.tsx
│   ├── ServiceCard.module.css
│   ├── QRCodeComponent.tsx
│   └── QRCodeComponent.module.css
│
├── sections/                # סקשנים ראשיים
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── About.tsx
│   ├── About.module.css
│   ├── Services.tsx
│   ├── Services.module.css
│   ├── WhyUs.tsx
│   ├── WhyUs.module.css
│   ├── Contact.tsx
│   ├── Contact.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
│
├── types/                   # TypeScript types
│   └── index.ts
│
├── hooks/                   # Custom React Hooks (עתידי)
├── utils/                   # Utility functions (עתידי)
├── assets/                  # תמונות וקבצים
│   ├── images/
│   └── icons/
│
├── styles/                  # Global styles (עתידי)
├── App.tsx                  # App root
├── App.css                  # App styles
├── main.tsx                 # Entry point
├── index.css                # Global CSS
│
index.html                   # HTML template
vite.config.ts             # Vite config
tsconfig.json              # TypeScript config
netlify.toml               # Netlify config
```

## 📚 הערות ל-TODO

- [ ] Implement contact form with email validation
- [ ] Add analytics (Google Analytics / Mixpanel)
- [ ] Add CMS integration (Contentful / Strapi)
- [ ] Implement booking system
- [ ] Add testimonials section with real customer reviews
- [ ] Add blog section for updates
- [ ] Implement A/B testing for CTA buttons
- [ ] Add multilingual support (EN/HE)
- [ ] Implement service calculator/estimator
- [ ] Add payment integration (Stripe / PayPal)

## 🔒 אבטחה

- No sensitive data in client-side code
- Environment variables for secrets (implement if needed)
- CORS headers configured properly
- CSP (Content Security Policy) headers recommended

## 📊 Performance Checklist

- [x] Responsive design
- [x] Mobile-first approach
- [x] CSS Modules for scoping
- [x] Lazy loading ready
- [x] SEO optimized
- [x] Accessibility compliance
- [x] Build optimization (minification)
- [ ] Image optimization (to implement with real images)
- [ ] CDN setup (Netlify handles this)

## 🤝 תרומה

ברוכים הבאים להצעות וביקורות!

## 📄 רישיון

MIT License - ראה את קובץ `LICENSE` לפרטים נוספים.

## 📞 צור קשר

- **אימייל**: contact@agsi-circasi.co.il
- **וואטסאפ**: [https://wa.me/+972507000000](https://wa.me/+972507000000)
- **אינסטגרם**: [@agassi.kerkasi](https://instagram.com/agassi.kerkasi)
- **טיקטוק**: [@agassi.kerkasi](https://tiktok.com/@agassi.kerkasi)

---

**אגסי קרקסי** © 2024. כל הזכויות שמורות.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
