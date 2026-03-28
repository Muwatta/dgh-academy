# Dr. Gambo Hamza Islamic Academy — Website

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom CSS variables
- **Data layer**: JSON files in `/src/data` → swap for Sanity.io/Contentful later
- **Routing**: `/` = School (Morning), `/madrasa` = Madrasa (Evening)

## Folder Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (shared)
│   ├── page.tsx                # School homepage
│   ├── about/page.tsx
│   ├── admissions/page.tsx
│   ├── contact/page.tsx
│   └── madrasa/
│       ├── layout.tsx          # Madrasa layout (own nav/theme)
│       ├── page.tsx            # Madrasa homepage
│       ├── about/page.tsx
│       └── admissions/page.tsx
├── components/
│   ├── shared/                 # Used by both school & madrasa
│   ├── school/                 # School-specific components
│   └── madrasa/                # Madrasa-specific components
├── data/
│   ├── school.ts               # School content (CMS-replaceable)
│   └── madrasa.ts              # Madrasa content (CMS-replaceable)
└── lib/
    └── types.ts                # Shared TypeScript types
```

## To Run
```bash
npm install
npm run dev
```

## Future LMS Migration
- Replace `src/data/*.ts` with Sanity/Contentful API calls
- Add `src/app/portal/` for student/teacher portals
- Add NextAuth.js for authentication


