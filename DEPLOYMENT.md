# 🌐 הוראות פריסה

הדף מוכן לפריסה ב-Netlify בדקה אחת!

## Netlify (מומלץ ביותר)

### שלב 1: הכנה
```bash
# וודא שכל הקוד בתא GitHub
git add -A
git commit -m "Ready for deployment"
git push origin main
```

### שלב 2: התחבר ל-Netlify
1. עבור ל [app.netlify.com](https://app.netlify.com)
2. אתחול עם GitHub

### שלב 3: בחר את המאגר
- בחר "New site from Git"
- חפש את `Agassi-Kerkasi`
- בחר את `main` branch

### שלב 4: הגדרות Build
- Build command: `npm run build`
- Publish directory: `dist`

### שלב 5: תצוגה מקדמות
- Netlify תפרוס אוטומטית
- תקבל כתובת זמנית כמו `https://xxx-xxx-xxx.netlify.app`

### שלב 6: Domain מותאם
1. קנה domain (כמו agassi-kerkasi.com)
2. הוסף ל-Netlify:
   - Netlify DNS / External DNS
3. הגדר custom domain בהגדרות

## פריסה אחרות

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

ואז הוסף ל-`package.json`:
```json
{
  "homepage": "https://your-username.github.io/Agassi-Kerkasi",
  "scripts": {
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}
```

וריץ:
```bash
npm run deploy
```

## בדיקה לפני פריסה

```bash
# בנה את הדף
npm run build

# תצוג מקומית של הבניה
npm run preview

# בדוק בדפדפן: http://localhost:4173
```

## תצוגה סיור מהלך (Live Preview)

### Android / iPhone
1. סרוק את ה-QR code עם המצלמה
2. או פתח את ה-URL של הדף בטלפון

## בדיקת ביצועים

### Google PageSpeed Insights
1. עבור ל [pagespeed.web.dev](https://pagespeed.web.dev)
2. הכנס את ה-URL של הדף שלך
3. בדוק את הציון

### WebAIM - Contrast Checker
1. עבור ל [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)
2. בדוק את הניגודיות של הצבעים

## ניטור אחרי הפריסה

### Netlify Analytics
- Dashboard > Analytics
- צפה בנתונים על:
  - מבקרים
  - עמודים פופולריים
  - Device types

### Google Analytics (אופציונלי)
1. הגדר GA account
2. הוסף ל-`index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## בעיות נפוצות

### "Build failed"
```bash
# נקה cache
rm -rf node_modules
rm -rf dist
npm install
npm run build
```

### Port already in use
```bash
# Vite יבחר port חדש אוטומטית
npm run dev
```

### CSS אפור
- בדוק את `src/index.css`
- וודא שכל ה-CSS Modules imported כראוי

## Environment Variables

אם צריך להשתמש בסודות:

1. צור `.env.local` (לא להעלות ל-Git):
```
VITE_SECRET_KEY=your-secret-here
```

2. השתמש בקוד:
```javascript
const secret = import.meta.env.VITE_SECRET_KEY;
```

3. ב-Netlify: Settings > Environment

## תמונות

### Optimize Images
```bash
# Use tools like:
# - TinyPNG (tinypng.com)
# - ImageOptim
# - Squoosh (squoosh.app)
```

## CDN Headers

Netlify מוגדרת כבר ב-`netlify.toml` עם:
- Cache-Control headers
- Redirects
- Security headers

## SSL/HTTPS

✅ **כבר מופעל!** 
- Netlify provides free SSL
- ה-HTTPS מופעל אוטומטית

## עמוד 404 מותאם

יוצר אוטומטית ל-SPA routing.

## Support

❓ בעיות? צור issue ב-GitHub או צור קשר:
- **אימייל**: contact@agsi-circasi.co.il
- **וואטסאפ**: [https://wa.me/+972507000000](https://wa.me/+972507000000)
