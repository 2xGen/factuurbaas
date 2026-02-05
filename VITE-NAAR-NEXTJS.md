# Vite → Next.js: is het de moeite en kan het zonder iets te breken?

## 1. Ja, de site is Vite

- **Build:** Vite 4 + React 18  
- **Routing:** React Router v6  
- **Meta/SEO:** react-helmet-async (client-side)  
- **Hosting:** Vercel (zoals je aangaf)

---

## 2. Is Next.js “beter” voor SEO?

**Kort antwoord:** Next.js kan voor SEO iets beter zijn, maar het verschil is vaak beperkt. De grootste winst heb je al gehaald met sitemap, canonicals, titels en content.

### Waarom Next.js voor SEO handig kan zijn

- **SSR/SSG:** De eerste HTML die een crawler krijgt bevat meteen de juiste titel, description en content. Geen wachten op JavaScript.
- **Metadata API:** Per route (of per pagina) `metadata` / `generateMetadata` instellen; geen Helmet in de browser.
- **Social / andere crawlers:** Diensten die weinig JS draaien (sommige social previews, bots) zien meteen de juiste meta en content.

### Waarom het verschil vaak beperkt is

- **Google:** Rendert JavaScript goed. Voor Google is een nette Vite/React-site met goede meta en content meestal voldoende.
- **Jouw situatie:** De lage posities en CTR komen vooral door concurrentie en snippet (titel/description), niet door “Vite vs Next”. Die heb je al aangepakt.

**Conclusie:** Next.js is voor SEO *iets* gunstiger (zeker voor niet-Google crawlers en eerste byte), maar geen must. Je kunt ook op Vite blijven en eventueel later pre-rendering of een prerender-service overwegen.

---

## 3. Kunnen we van Vite naar Next ombouwen zonder functies te breken?

**Ja**, maar het is een **grote refactor**, geen kleine wijziging. Alles kan behouden blijven qua functionaliteit als je het goed uitvoert.

### Wat er moet veranderen

| Onderdeel | Nu (Vite) | In Next.js |
|-----------|-----------|------------|
| **Routing** | React Router (`AppRoutes.jsx`, `<Route>`) | File-based routing: `app/page.js`, `app/create-invoice/page.js`, `app/blogs/[slug]/page.js`, etc. |
| **Meta/SEO** | `react-helmet-async` per pagina | `metadata` / `generateMetadata` per route in `layout.js` of `page.js` |
| **Entry** | `main.jsx` → `<BrowserRouter>` → `<App>` | `app/layout.js` (root layout) + `app/page.js` (home) |
| **Auth/context** | Supabase in `AppContext` / `SupabaseAuthContext` | Zelfde Supabase; providers in root layout; client components waar hooks/state zitten |
| **PDF (jspdf + html2canvas)** | Hooks in client | Blijft **client-only**: `'use client'` of dynamic import zonder SSR (browser-APIs) |
| **Supabase (page_views, logs)** | Direct vanuit component | Zelfde; alleen aanroepen uit client components of Server Actions / Route Handlers |
| **Tailwind / Radix / Framer Motion** | Gewoon gebruiken | Zelfde; componenten die hooks/events gebruiken → `'use client'` |
| **Blogdata** | `blogData.js` | Zelfde bestand; importeren in server component (voor meta) of client (voor render) |

### Wat blijft grotendeels hetzelfde

- Alle **componenten** (Header, Footer, invoice-form, dashboard, blog-cards, etc.): kunnen 1-op-1 over, met `'use client'` waar nodig.
- **Supabase**:zelfde client; auth en logging werken hetzelfde in Next.
- **Styling**: Tailwind, `index.css` → kan zo mee naar `app/globals.css`.
- **Functies**: Factuur maken, PDF-download, inloggen, admin, blogpagina’s – conceptueel ongewijzigd; alleen de plek waar ze “mounten” (welke Next-pagina) verandert.

### Valkuilen om te vermijden

1. **jspdf / html2canvas** alleen in client component of dynamic import met `ssr: false`; nooit tijdens SSR draaien.
2. **Supabase** in server components: geen gebruik van de browser-`supabase` client in Server Components; wel in Client Components of in Server Actions/Route Handlers met server-side client.
3. **Framer Motion / Radix** in componenten die in de server tree zitten → die componenten `'use client'` maken.
4. **React Router** volledig verwijderen: geen `<Link>` / `useNavigate` van React Router meer; overal `next/link` en `useRouter` van Next.js gebruiken.

---

## 4. Aanpak: gefaseerde migratie (zonder alles in één keer te breken)

Een haalbare volgorde:

1. **Next.js project naast of onder dezelfde repo** (bijv. `next-app/` of vervangen van huidige root).
2. **Next.js 14+ met App Router** (`app/`), TypeScript optioneel (kunnen we eerst in JS houden).
3. **Eerst statische/SEO-pagina’s:**  
   - `app/layout.js` (Header, Footer, providers).  
   - `app/page.js` (home).  
   - `app/blogs/page.js` + `app/blogs/[slug]/page.js` (bloglijst + blogpost met `generateMetadata` uit `blogData`).  
   - `app/privacybeleid/page.js`, `app/algemene-voorwaarden/page.js`.  
   Zodat alle belangrijke SEO-pagina’s SSR/SSG hebben met correcte meta.
4. **Daarna app-pagina’s:**  
   - `app/create-invoice/page.js` (factuurmaker: client component of wrapper met `'use client'`).  
   - Login, Register, Dashboard, Admin: allemaal als client pages of met client components.
5. **Supabase + PDF:** ongewijzigd qua logica; alleen zorgen dat ze alleen in client (of Server Actions) worden aangeroepen.
6. **Oude Vite-build uitzetten** zodra alle routes in Next werken en getest zijn.

Zo kun je stap voor stap over zonder dat de bestaande functies (factuur maken, PDF, auth, admin, blog) breken.

---

## 5. Aanbeveling

- **Alleen voor SEO:** Migreren naar Next.js is **niet noodzakelijk**. Je huidige Vite-setup met de gedane SEO-aanpassingen is voor Google prima. Next.js geeft vooral extra zekerheid en betere eerste HTML voor andere crawlers.
- **Als je toch wilt migreren** (betere lange-termijn stack, één framework voor alles, of Vercel-optimalisatie): het **kan zonder functies te breken**, maar reken op een **grote refactor** (routing, meta, client/server grenzen, mogelijk 1–2 weken werk afhankelijk van hoe grondig je test).

Als je wilt, kan ik een **concrete start** maken: bijvoorbeeld een minimale Next.js App Router-setup met home, blogs (incl. `generateMetadata`), layout en één client-pagina (bijv. create-invoice) zodat je het patroon hebt om de rest zelf of gefaseerd over te zetten.
