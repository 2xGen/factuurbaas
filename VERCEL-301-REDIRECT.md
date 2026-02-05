# 301-redirect www → factuurbaas.nl instellen in Vercel

Om duplicate content te voorkomen en één canonieke URL te hebben, moet alle verkeer van **www.factuurbaas.nl** permanent (301) doorverwezen worden naar **https://factuurbaas.nl** (zonder www).

## Methode 1: Vercel Dashboard (aanbevolen)

1. **Log in** op [vercel.com](https://vercel.com) en open je project (FactuurBaas/Website).

2. Ga naar **Settings** → **Domains**.

3. Zorg dat **factuurbaas.nl** (zonder www) als domein is toegevoegd en als **primary** staat.

4. Voeg **www.factuurbaas.nl** toe als extra domein (als dat nog niet zo is).

5. Bij het domein **www.factuurbaas.nl**:
   - Klik op de drie puntjes (⋮) naast het domein.
   - Kies **Edit** of **Redirect**.
   - Stel in: **Redirect** www.factuurbaas.nl → **https://factuurbaas.nl** (permanent / 301).

   Of gebruik onder hetzelfde project **Settings** → **Domains** de optie om voor www een **Redirect** naar het hoofddomein in te stellen.

6. Sla de wijziging op. Vercel past de redirect bij de volgende request toe.

---

## Methode 2: `vercel.json` in de repository

Als je redirects in code wilt beheren, maak in de **root** van je project een bestand `vercel.json` aan (naast `package.json`):

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "destination": "https://factuurbaas.nl/:path*",
      "permanent": true,
      "has": [
        {
          "type": "host",
          "value": "www.factuurbaas.nl"
        }
      ]
    }
  ]
}
```

- **source** `/:path*`: alle paden (inclusief alleen `/`).
- **destination**: je canonieke URL; `:path*` behoudt het pad.
- **permanent**: true = **301**.
- **has**: alleen toepassen als de **host** gelijk is aan **www.factuurbaas.nl**.

Na deploy zal Vercel bij elke request naar `https://www.factuurbaas.nl/...` een 301 naar `https://factuurbaas.nl/...` geven.

---

## Controleren

1. **Browser**: open `https://www.factuurbaas.nl` → je wordt doorgestuurd naar `https://factuurbaas.nl` en de adresbalk toont geen www meer.
2. **cURL** (in terminal):
   ```bash
   curl -I https://www.factuurbaas.nl
   ```
   Je wilt zien: **HTTP/2 301** (of **301 Moved Permanently**) en een header **location: https://factuurbaas.nl/**.

---

## Google Search Console

- Gebruik **één** property met de canonieke URL: **https://factuurbaas.nl** (zonder www).
- Als je nu een property voor **www** hebt: voeg de **https://factuurbaas.nl**-property toe en gebruik die als belangrijkste. Na de 301 zal Google het verkeer en de waarde geleidelijk aan de niet-www URL toerekenen.
