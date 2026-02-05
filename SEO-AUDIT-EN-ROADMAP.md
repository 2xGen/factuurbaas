# Internal SEO-audit & roadmap naar 1.000 organische bezoekers/maand

**Site:** factuurbaas.nl  
**Datum:** februari 2026  
**Doel:** Geen wijzigingen in code; alleen voorstel voor verbeteringen en roadmap.

---

## 1. Hosting

Er staat geen `vercel.json` in de repository. Het project gebruikt Vite, `_redirects` (Netlify-stijl) en er is een `dist/` build. **Controleer in het Vercel-dashboard** of factuurbaas.nl daar daadwerkelijk op staat; anders kan het Netlify of een andere host zijn. Voor SEO maakt het weinig uit, zolang er maar één canonieke host is en redirects kloppen.

---

## 2. Samenvatting GSC-data

| Metriek | Situatie |
|--------|----------|
| **CTR** | Vrijwel 0% (1 klik in de periode) |
| **Gem. positie** | ~52–73 (veelal pagina 6–8) |
| **Impressies** | Enkele duizenden; groei mogelijk |
| **Sterkste pagina’s** | `/blogs/factuur-maken-zzp` (2545 imp.), `/create-invoice` (1432 imp.), `/blogs/verschil-factuur-offerte` (423 imp.) |

**Conclusie:** Je wordt wel getoond, maar te laag en de snippet trekt geen klikken. Verbetering van **positie** (relevance/authority) en **CTR** (titel + beschrijving) is nodig om naar ~1k bezoekers/maand te groeien.

---

## 3. Kritieke technische issues

### 3.1 www vs non-www (canonical / duplicate content)

- In GSC komen **beide** varianten voor: `factuurbaas.nl` en `www.factuurbaas.nl`.
- De enige klik ging naar **www**.factuurbaas.nl/blogs/gratis-factuur-zzp.
- Overal in de code (canonicals, sitemap) wordt **zonder www** gebruikt.

**Voorstel:**

- Kies **één** domein (bijv. `https://factuurbaas.nl` zonder www).
- Zet een **301-redirect** van `https://www.factuurbaas.nl/*` naar `https://factuurbaas.nl/*` (op Vercel/Netlify: redirect-regel of “canonical domain”).
- In Google Search Console: één property voor de gekozen URL (bijv. “factuurbaas.nl” met prefix `https://`).

### 3.2 Sitemap

**Problemen:**

1. **XML-fout:** Regel 159: `</_priority>` in plaats van `</priority>` → sitemap kan als ongeldig worden gezien.
2. **Verkeerde legal-URL’s:** Sitemap bevat:
   - `https://factuurbaas.nl/privacy-policy`
   - `https://factuurbaas.nl/terms-and-conditions`  
   De echte routes zijn `/privacybeleid` en `/algemene-voorwaarden`. Sitemap moet die NL-URL’s gebruiken (of je redirects van /privacy-policy → /privacybeleid).
3. **Ontbrekende blog-URL’s:** In GSC zie je veel impressies voor blogs die **niet** in de sitemap staan, o.a.:
   - `/blogs/verschil-factuur-offerte`
   - `/blogs/factuur-pdf-downloaden`
   - `/blogs/factureren-startende-zzper`
   - `/blogs/sneller-betalen-factuur`
   - `/blogs/buitenlandse-klanten-factureren`
   - `/blogs/btw-factuur-zzp`
   - `/blogs/factuur-templates-zzp`
   - `/blogs/factuurbeheer-overzicht`
   - `/blogs/factuur-fouten-voorkomen`
   - `/blogs/gratis-factuur-zzp`
   - `/blogs/factureren-zonder-account`
4. **Verouderde lastmod:** Overal `2025-10-03`; beter echte of regelmatig bijgewerkte datums.
5. **Sitemap bevat blogs die niet in `blogData.js` staan** (bijv. `hoe-maak-je-een-factuur`, `factuur-eisen-belastingdienst`, …). Die routes bestaan niet; ze leiden tot 404 of redirect. Alleen URLs in sitemap zetten die daadwerkelijk bestaan (zoals in `blogData.js`).

**Voorstel:**

- `</_priority>` → `</priority>`.
- Legal: sitemap-URL’s aanpassen naar `/privacybeleid` en `/algemene-voorwaarden` (of redirects + canonicals afstemmen).
- Alle bestaande blog-slugs uit `blogData.js` in de sitemap opnemen; niet-bestaande blog-URL’s verwijderen.
- lastmod dynamisch of maandelijks bijwerken.
- Eventueel: sitemap genereren uit dezelfde bron als de app (bijv. script dat `blogData` leest), zodat sitemap en site altijd in sync zijn.

### 3.3 Robots.txt

- Sitemap-URL is correct.
- Disallow voor admin-pagina’s is goed.

Geen wijzigingen nodig, tenzij je extra paden wilt uitsluiten.

---

## 4. CTR (snippet) – waarom bijna 0% klikken?

Hoge impressies en 0 klikken wijzen op:

- Titels/beschrijvingen die **niet opvallen** of **niet aansluiten** bij de zoekvraag, of
- Sterke concurrenten in posities 1–5 met betere snippets.

**Belangrijkste pagina’s en voorstellen:**

| Pagina | Huidige titel (ideaal) | Voorstel richting |
|--------|------------------------|-------------------|
| **factuur-maken-zzp** (2545 imp.) | "Hoe maak je een factuur als zzp'er? (stappenplan + gratis voorbeeld) \| FactuurBaas" | Korter; focus op “gratis”, “online”, “voorbeeld” of “stappenplan”. Bijv. “Factuur maken als zzp’er – Stappenplan + gratis voorbeeld \| FactuurBaas”. |
| **create-invoice** (1432 imp.) | "Gratis Factuur Maken \| Direct Online Factureren \| FactuurBaas" | Behoud “gratis” en “direct”; eventueel toevoegen: “Geen account nodig” of “Binnen 1 minuut klaar”. |
| **verschil-factuur-offerte** (423 imp.) | "Wat is het verschil tussen een factuur en een offerte? \| FactuurBaas" | Queries zijn o.a. “verschil offerte en factuur”, “offerte vs factuur” – titel sluit al goed aan; description kan duidelijker “in 2 minuten uitgelegd” of “gratis voorbeeld” noemen. |

**Algemene richtlijnen:**

- **Title:** 50–60 tekens; hoofdkeyword vooraan; merk achteraan; geen dubbele pipes.
- **Description:** 150–160 tekens; call-to-action (“Maak gratis je factuur”), “gratis”/“voorbeeld” waar relevant; geen vage marketingtaal.
- Per blog: description laten aansluiten bij de **meest voorkomende zoektermen** uit GSC (zie onder).

---

## 5. Content & positie (60–90)

Je staat voor veel termen op pagina 6–9. Verbetering vereist **relevance** en **internal linking**.

### 5.1 Top queries om op in te zetten (volgens GSC)

- factuur maken zzp  
- factuur zzp / zzp factuur  
- online factuur maken  
- zzp factuur maken  
- factuur maken gratis  
- voorbeeld factuur zzp  
- factuur online maken / factuur maken online  
- verschil offerte en factuur  
- gratis factuur maken  
- factuur sneller betaald krijgen  
- btw op factuur (zzp)  
- factuur pdf / pdf factuur  

### 5.2 Content-voorstellen (zonder code te wijzigen)

- **H1 en eerste alinea:** Op elke blog de **exacte zoekterm** (of nauwe variant) in H1 en in de eerste 100 woorden verwerken.
- **Subkopjes (H2/H3):** Lange-tail queries uit GSC verwerken (bijv. “Wat moet er op een factuur staan zzp”, “Factuur maken zzp zorg”, “Betaaltermijn zzp”).
- **Woordtelling:** Waar concurrerende resultaten lange artikelen zijn, overweeg 1.200–1.800 woorden voor kernblogs (factuur-maken-zzp, gratis-factuur-zzp, verschil-factuur-offerte).
- **Snippet-optimalisatie:** Eerste alinea zo schrijven dat die als “featured snippet”-antwoord kan dienen (duidelijke definitie of stappen in 1–2 zinnen).

### 5.3 Internal linking

- Van homepage en `/create-invoice`: duidelijke links naar 3–5 belangrijkste blogs (factuur-maken-zzp, gratis-factuur-zzp, verschil-factuur-offerte, factuur-pdf-downloaden, btw-factuur-zzp).
- Binnen blogs: onderaan of in de sidebar “Lees ook”-blokken naar gerelateerde artikelen (zelfde onderwerp, andere long-tail).
- In de tekst: waar het past een link naar “Maak hier direct je gratis factuur” (/create-invoice) en naar andere relevante blogs (offerte vs factuur, btw, betaaltermijn, enz.).

---

## 6. Overige technische punten

### 6.1 SPA en meta (Vite + React Helmet)

- Title en description worden met **react-helmet-async** client-side gezet. Google rendert JS doorgaans goed; andere crawlers/social soms minder.
- **Risico:** Bij trage of beperkte JS kan de eerste response alleen de standaard `index.html` meta hebben.
- **Optioneel later:** Voor belangrijkste URLs (home, create-invoice, top 5 blogs) server-side of pre-rendered meta (SSR of build-time HTML inject) overwegen voor betere zekerheid en social previews.

### 6.2 Schema.org BlogPosting

- In `BlogPostPage.jsx` worden `datePublished` en `dateModified` met `new Date().toISOString()` gezet → elke request = “vandaag”. Beter: echte publicatie- en wijzigdatums per artikel (bijv. in `blogData.js`) gebruiken voor betere rich results en vertrouwen.

### 6.3 Canonicals

- Blog- en create-invoice-pagina’s hebben correcte canonicals naar `https://factuurbaas.nl/...`. Na het oplossen van www: alle canonicals op het gekozen domein (zonder www) houden.

---

## 7. Roadmap naar ~1.000 organische bezoekers/maand

Ruwe aanname: gemiddeld 3% CTR en positie ~15–25 na verbeteringen → ~30–40 impressies per klik. Voor 1.000 bezoeken: ~25.000–35.000 impressies/maand nodig. Nu heb je al duizenden impressies; de winst moet komen van **betere positie** en **hogere CTR**.

### Fase 1 – Quick wins (maand 1)

1. **Canonical domein:** 301 van www → non-www (of omgekeerd) en GSC op één property.
2. **Sitemap:**  
   - `</_priority>` fixen.  
   - Legal-URL’s naar `/privacybeleid` en `/algemene-voorwaarden`.  
   - Alle bestaande blogs uit `blogData.js` toevoegen; niet-bestaande blog-URL’s uit sitemap halen.
3. **Titel + description:** Voor de 3 grootste pagina’s (factuur-maken-zzp, create-invoice, verschil-factuur-offerte) titel en meta description herschrijven op basis van top queries en CTR-richtlijnen hierboven.
4. **URL Consistency:** In GSC en in content overal dezelfde canonieke URL gebruiken (geen mix www/non-www).

**Verwacht:** Minder duplicate-signalen, betere indexatie, kans op iets hogere CTR.

### Fase 2 – Content & internal linking (maand 2–3)

5. **Content-uitbreiding:** Top 5 blogs (o.a. factuur-maken-zzp, gratis-factuur-zzp, verschil-factuur-offerte) uitbreiden met H2/H3 die aansluiten bij GSC-queries; eerste alinea en H1 op hoofdkeyword optimaliseren.
6. **Internal links:**  
   - Homepage + create-invoice: vaste links naar deze blogs.  
   - Binnen blogs: “Lees ook” en in-tekst links naar /create-invoice en gerelateerde artikelen.
7. **Nieuwe artikelen (optie):** 1–2 nieuwe blogs voor long-tail uit GSC (bijv. “Wat moet er op een factuur staan zzp”, “Factuur sneller betaald krijgen”).

**Verwacht:** Betere posities (bijv. van 70 naar 40–50) en meer lange-tail verkeer.

### Fase 3 – Doorbouwen (maand 4–6)

8. **Schema:** Echte `datePublished`/`dateModified` per artikel; controleren of BlogPosting correct in Rich Results getest wordt.
9. **Snippet-optimalisatie:** Voor 5–10 queries gericht paragraafen toevoegen die als featured snippet kunnen dienen (korte lijstjes, definities, stappen).
10. **Monitoring:** Maandelijks GSC: queries, posities, CTR; titel/description A/B-ideeën bij lage CTR.
11. **Eventueel:** Pre-render of SSR voor top 5–10 pagina’s als je merkt dat meta/social of indexatie daaronder lijdt.

**Verwacht:** Verdere verschuiving naar posities 20–35 en CTR 2–4%; geleidelijk richting 500–1.000 bezoeken/maand mogelijk.

### Indicatief streefbeeld

- **Impressies:** van ~5k–6k/maand naar ~25k–35k/maand (meer pagina’s geïndexeerd, betere posities).
- **CTR:** van ~0% naar 2–4% op belangrijkste queries.
- **Resultaat:** 25.000 × 3% ≈ 750 klikken; 35.000 × 3% ≈ 1.050 klikken → **doel ~1k bezoeken/maand** haalbaar bij volgehouden uitvoering.

---

## 8. Prioriteiten-overzicht

| Prioriteit | Actie | Impact |
|------------|--------|--------|
| P0 | 301 www ↔ non-www; één canoniek domein | Duplicate content, GSC-duidelijkheid |
| P0 | Sitemap: XML-fout fixen, juiste legal-URL’s, alle bestaande blogs, geen 404-blogs | Indexatie, crawl-efficiency |
| P1 | Titel + description voor top 3 pagina’s (CTR) | Direct meer klikken bij gelijke positie |
| P1 | Internal linking homepage + create-invoice → top blogs | Sterkere pagina’s, betere posities |
| P2 | Content-uitbreiding + H2/H3 op GSC-queries (top 5 blogs) | Betere relevance, betere posities |
| P2 | “Lees ook” en in-tekst links tussen blogs en naar /create-invoice | Authority, UX, rankings |
| P3 | Schema datums; eventueel pre-render/SSR voor top-pagina’s | Rich results, crawlbare meta |

---

Als je wilt, kan ik de volgende stap concreet maken (bijv. exacte titel/description-voorstellen per URL, of een sitemap-voorstel regel-voor-regel) zonder in de code te wijzigen.
