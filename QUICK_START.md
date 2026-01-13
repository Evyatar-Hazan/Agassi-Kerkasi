# 🚀 שימוש ותיקייה מהירה

## התחלה מהירה

### 1. התקנה
```bash
npm install
```

### 2. הרצה בפיתוח
```bash
npm run dev
```
הדף יפתח באופן אוטומטי ב `http://localhost:5173`

### 3. בניה ל-Production
```bash
npm run build
```
הקבצים יהיו בתיקייה `dist/`

### 4. תצוגה מקומית של הבניה
```bash
npm run preview
```

## 📁 מבנה ה-Project

```
src/
├── App.tsx                 # Root component
├── index.css              # Global styles with CSS variables
├── main.tsx               # Entry point
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── ServiceCard.tsx
│   └── QRCodeComponent.tsx
├── sections/              # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── types/                 # TypeScript types
└── [CSS Modules for each component]
```

## 🎨 CSS Variables

את הצבעים והגדלים אפשר לשנות בקובץ `src/index.css`:

```css
:root {
  --color-primary: #ff6b35;    /* Orange */
  --color-secondary: #004e89;  /* Blue */
  --color-accent: #f7b801;     /* Gold */
}
```

## 📱 תכונות ראשיות

✅ **Responsive Design** - עובד בכל גדלי מסכים
✅ **Accessibility** - HTML סמנטי + ARIA labels
✅ **SEO Optimized** - Meta tags + Open Graph
✅ **Performance** - Optimized build + CSS Modules
✅ **TypeScript** - Type-safe קוד
✅ **Animations** - Smooth transitions

## 🌐 פריסה

### Netlify
1. דחוף את הקוד ל-GitHub
2. התחבר ל-Netlify
3. בחר "New site from Git"
4. בחר את המאגר
5. Build: `npm run build`
6. Publish: `dist`

פריסה אוטומטית עם כל push!

### כתובת בדיקה לוקלית
```bash
npm run build && npm run preview
```

## 🔧 טיפול בבעיות

### ה-Port 5173 תפוס?
Vite יבחר port חדש אוטומטית

### שגיאות CSS?
```bash
npm install
npm run build
```

## 📝 TODO - עתידי

- [ ] טופס הזמנה עם validation
- [ ] אנליטיקס (Google Analytics)
- [ ] CMS integration (Contentful)
- [ ] מערכת הזמנות
- [ ] ביקורות לקוחות
- [ ] בלוג
- [ ] תמונות אמיתיות
- [ ] payment integration

## 📞 יצירת קשר

**אימייל**: contact@agsi-circasi.co.il
**וואטסאפ**: [https://wa.me/+972507000000](https://wa.me/+972507000000)
