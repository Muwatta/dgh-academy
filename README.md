# Dr. Gambo Hamza Islamic Academy — Website

Official website for **Dr. Gambo Hamza Islamic Academy** (morning school) and **DGH Academy Madrasa** (evening Islamic school).  
Built with Next.js 14, TypeScript, and Tailwind CSS – deployed on Vercel.

---

## 🚀 Live Site

- Production: [https://dgh-academy.vercel.app](https://dgh-academy.vercel.app)  
- Custom domain (optional): [www.dghacademy.com](https://www.dghacademy.com)

---

## 🧱 Tech Stack

| Area               | Technology |
|--------------------|------------|
| Framework          | Next.js 14 (App Router, static export) |
| Language           | TypeScript |
| Styling            | Tailwind CSS + custom CSS variables |
| Fonts              | Google Fonts (Amiri, Nunito Sans) via `next/font` |
| Image Optimization | `sharp` (production), `next/image` |
| Analytics          | Vercel Analytics |
| Hosting / CDN      | Vercel (automatic deploys from GitHub) |
| Version Control    | Git + GitHub (private repo) |

---

## 📁 Folder Structure (simplified)

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout (fonts, metadata, analytics)
│   ├── page.tsx             # School homepage (morning)
│   ├── about/
│   ├── admissions/
│   ├── contact/
│   ├── madrasa/             # All madrasa routes
│   │   ├── layout.tsx       # Madrasa‑specific layout & theme
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── curriculum/
│   │   └── timetable/
├── components/              # Reusable UI components
│   ├── school/              # School navbar, footer, etc.
│   ├── madrasa/             # Madrasa navbar, footer, etc.
│   └── shared/              # Used by both (buttons, cards, etc.)
├── data/                    # 📝 Replaceable content layer
│   ├── school.ts            # School text, stats, programs
│   └── madrasa.ts           # Madrasa text, timetable, mallam message
└── lib/
    └── types.ts             # Shared TypeScript interfaces
```

---

## 🔧 Local Development

1. **Clone the repository** (private – ask for access)
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Building & Testing

- **Production build**
  ```bash
  npm run build
  ```
- **Preview production build locally**
  ```bash
  npm start
  ```
  (Install `sharp` to remove the image optimisation warning: `npm install sharp`)

---

## 🌍 Deployment (Vercel)

Every push to the `main` branch on GitHub triggers an automatic deploy on Vercel.

- **Manual deploy** (if needed):
  ```bash
  vercel --prod
  ```
- **Environment variables** (if any) must be added in the Vercel dashboard → Settings → Environment Variables.

---

## 📊 Analytics

Vercel Analytics is already integrated in `src/app/layout.tsx`.  
View real‑time visitor data, page views, and referrers in the Vercel dashboard → **Analytics** tab.

No extra configuration needed – it works automatically after deployment.

---

## 🖼️ Images

- Local images are stored in `public/images/` and **committed to the private GitHub repo** (they are safe).
- External images (e.g., Unsplash) are allowed via `remotePatterns` in `next.config.js`.
- Optimisation is handled by `next/image` + `sharp` (Vercel uses `sharp` by default).

---

## ✏️ Editing Content

All copy (text, stats, programs, timetable, team messages) lives in:

- `src/data/school.ts` – School content
- `src/data/madrasa.ts` – Madrasa content

**To update text**: edit the corresponding `.ts` file, commit, and push. Vercel will rebuild automatically.

**Future CMS migration** (e.g., Sanity, Contentful):
- Replace the static `.ts` files with API calls.
- Keep the same TypeScript interfaces for a smooth transition.

---

## 🧪 Known Warnings (harmless)

- `Failed to find font override values for font 'Nunito Sans'` – appears during build, does **not** affect functionality.
- `npm audit` vulnerabilities – related to dev dependencies; production code is unaffected.

---

## 📄 License

All rights reserved – content and design owned by Dr. Gambo Hamza Islamic Academy.

---

## 👤 Maintainer

- Project lead & developer: [@muwatta](https://github.com/muwatta)
- For questions or updates, contact via the school’s official channels.

---
