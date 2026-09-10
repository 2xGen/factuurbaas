import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Crown } from 'lucide-react';

export const metadata = {
  title: 'Privacybeleid | FactuurBaas',
  description:
    'Privacybeleid van FactuurBaas.nl — EU-hosting (Stockholm), Resend, Baas-status/referrals, cookies/local storage, beveiliging (RLS), Google-login en AVG-rechten.',
  alternates: { canonical: 'https://factuurbaas.nl/privacybeleid' },
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = '10 september 2026';

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center font-semibold text-deep-blue transition-colors hover:text-warm-orange"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Terug naar Home
        </Link>

        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <header className="mb-10 text-center">
            <Shield className="mx-auto mb-4 h-16 w-16 text-deep-blue sm:h-20 sm:w-20" />
            <h1 className="font-heading text-3xl font-bold text-deep-blue sm:text-4xl">Privacybeleid</h1>
            <p className="mt-2 text-sm text-gray-500">Laatst bijgewerkt: {lastUpdatedDate}</p>
            <p className="mt-3 text-sm">
              <Link href="/veiligheid" className="text-warm-orange hover:underline">
                Meer over beveiliging →
              </Link>
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              FactuurBaas.nl (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;) respecteert uw privacy. Dit privacybeleid beschrijft welke
              gegevens we verwerken, waarom, hoe lang, waar ze staan, hoe we beveiligen, en welke rechten u heeft
              onder de AVG.
            </p>
            <p>
              <strong>Verwerkingsverantwoordelijke:</strong> 2xGen LLC, handelend onder de naam FactuurBaas.nl,
              gevestigd in New Mexico, Verenigde Staten. Contact:{' '}
              <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
                mail@factuurbaas.nl
              </a>
              .
            </p>

            <h2>1. Twee manieren van gebruik</h2>
            <h3>Gastmodus (zonder account)</h3>
            <p>
              U kunt gratis een factuur of offerte maken en als PDF downloaden zonder account. Factuur- en
              klantgegevens worden dan <strong>lokaal in uw browser</strong> verwerkt en{' '}
              <strong>niet op onze servers opgeslagen</strong> voor later gebruik. We kunnen geanonimiseerde
              gebruiksstatistieken bijhouden (bijv. &quot;er is een factuur gedownload&quot;), zonder factuurinhoud.
            </p>
            <h3>Met account (Google-login)</h3>
            <p>
              Als u inlogt met Google, kunt u facturen opslaan, statussen en btw bijhouden, een dashboard gebruiken,
              klanten bewaren voor sneller factureren, en optioneel meedoen aan Baas-status (referral-programma) met
              unlocks zoals exclusieve factuurstijlen. Opslaan in de cloud gebeurt alleen wanneer u daarvoor kiest.
              Bij login/account vraagt u expliciet om akkoord met dit privacybeleid en onze voorwaarden.
            </p>

            <h2>2. Welke gegevens we verwerken</h2>
            <p>We verzamelen alleen wat nodig is voor de dienst:</p>
            <ul>
              <li>
                <strong>Account (Google OAuth):</strong> e-mailadres en naam die Google voor login doorgeeft. We
                slaan geen Google-wachtwoord op. We hebben <strong>geen toegang tot Gmail</strong>,{' '}
                <strong>geen toegang tot Google Contacten</strong>, en vragen geen andere Google-scopes dan wat
                nodig is om u te identificeren en in te loggen.
              </li>
              <li>
                <strong>Opgeslagen facturen (alleen als u opslaat):</strong> bedrijfs- en klantgegevens die u
                invult, factuurregels, bedragen, btw, status, notities. Klantgegevens vult u zelf in; u bent
                verantwoordelijk voor de rechtmatigheid daarvan.
              </li>
              <li>
                <strong>Opgeslagen klanten (alleen met account):</strong> gegevens die u bewaart om sneller te
                factureren (bijv. bedrijfsnaam, contactpersoon, e-mail, telefoon, adresvelden, KvK/btw). Deze
                vult u zelf in.
              </li>
              <li>
                <strong>Profiel (optioneel):</strong> bedrijfsnaam, adresvelden, KvK, btw-nummer, IBAN, logo.
              </li>
              <li>
                <strong>Logo:</strong> privé-opslag; in de database alleen een opslagpad, geen langlevende openbare
                downloadlink.
              </li>
              <li>
                <strong>Transactionele e-mail:</strong> uw account-e-mailadres (en eventueel naam) om
                dienstmails te sturen, zoals een welkomstmail bij accountaanmaak en een bevestiging bij
                accountverwijdering. Dit is <strong>geen marketingnewsletter</strong>.
              </li>
              <li>
                <strong>Nieuwsbrief-voorkeur (optioneel):</strong> of u tips/nieuws wilt ontvangen, plus
                het tijdstip van die keuze. Standaard uit; alleen aan als u de optionele checkbox aanvinkt.
              </li>
              <li>
                <strong>Technisch:</strong> sessie via Supabase Auth; geanonimiseerde pageviews en toolgebruik;
                optionele conversiemeting (gast → account) zonder factuurinhoud; tijdstip/versie van
                privacy-akkoord; of een welkomstmail is verzonden.
              </li>
              <li>
                <strong>Baas-status / referrals (met account):</strong> een unieke referralcode op uw profiel;
                eventueel wie u heeft uitgenodigd (<em>referred_by</em> bij nieuwe accounts die via uw link
                registreren); een teller van bezoeken aan uw Baas-link. We slaan bij linkbezoeken{' '}
                <strong>geen</strong> namen of e-mailadressen van bezoekers op — alleen een aggregaat
                (aantal bezoeken) gekoppeld aan de eigenaar van de link.
              </li>
            </ul>

            <h2>3. Doeleinden en grondslag</h2>
            <ul>
              <li>de dienst leveren (PDF, opgeslagen facturen, klanten, dashboard, btw-overzicht);</li>
              <li>
                transactionele communicatie over uw account (welkom, accountverwijdering, noodzakelijke
                dienstberichten);
              </li>
              <li>
                tips/nieuws (marketing) — <strong>alleen</strong> als u daar apart voor kiest via de optionele
                checkbox bij login/account of in uw profiel;
              </li>
              <li>
                Baas-status / referral-programma: uitnodigingen toeschrijven, voortgang tonen, misbruik
                tegengaan, en beloningen (zoals exclusieve factuurstijlen) vrijgeven;
              </li>
              <li>uw account beveiligen en misbruik tegengaan;</li>
              <li>de website verbeteren (geanonimiseerde statistieken);</li>
              <li>wettelijke verplichtingen nakomen waar van toepassing;</li>
              <li>uw AVG-rechten uitvoeren (export, verwijderen).</li>
            </ul>
            <p>
              Grondslag: uitvoering van de overeenkomst (dienst + bijbehorende transactionele e-mail +
              referral-/unlock-functies bij accountgebruik), gerechtvaardigd belang (beveiliging/statistiek/
              geaggregeerde linkbezoeken), en toestemming waar we daar om vragen. We sturen geen commercieel
              nieuwsbriefverkeer zonder aparte toestemming. Een nieuwsbrief-opt-in wordt op uw profiel bewaard
              (met tijdstip); zolang we geen aparte mailingdienst koppelen, versturen we nog geen nieuwsbrief.
              Bij accountverwijdering verdwijnt deze voorkeur mee, tenzij u later via een externe mailinglijst
              bent ingeschreven.
            </p>

            <h2>4. Waar staan uw gegevens? (locatie)</h2>
            <p>
              Opgeslagen accountgegevens (profiel, facturen, klanten, logo&apos;s) staan in onze database en opslag
              bij <strong>Supabase</strong>, projectregio <strong>eu-north-1 (Stockholm, Zweden)</strong> — dus
              binnen de <strong>Europese Unie / EER</strong>.
            </p>
            <p>
              Transactionele e-mails worden verstuurd via <strong>Resend</strong> (regio{' '}
              <strong>eu-west-1 / Ierland</strong> voor ons verzenddomein). Resend verwerkt hiervoor uw
              e-mailadres en de inhoud van de dienstmail — geen factuurinhoud of opgeslagen klantendossiers.
            </p>
            <p>
              De website kan worden gehost via Vercel (CDN/edge). Authenticatie loopt via Google OAuth; Google
              verwerkt login-identiteit volgens hun eigen voorwaarden. We verkopen uw factuur-, klant- of
              profielgegevens niet.
            </p>

            <h2>5. Verwerkers / derden</h2>
            <ul>
              <li>
                <strong>Supabase</strong> — database, authenticatie en opslag in regio eu-north-1 (Stockholm, EU).
              </li>
              <li>
                <strong>Resend</strong> — verzending van transactionele e-mails (welkom, accountverwijdering e.d.)
                via ons geverifieerde domein factuurbaas.nl; regio eu-west-1 (Ierland).
              </li>
              <li>
                <strong>Google</strong> — alleen OAuth-identiteit voor inloggen (geen Gmail/contacten).
              </li>
              <li>
                <strong>Vercel</strong> — hosting van de website en optionele anonieme analytics.
              </li>
            </ul>
            <p>We verkopen uw factuur-, klant- of profielgegevens niet aan derden.</p>

            <h3>Verwerkersovereenkomst (DPA)</h3>
            <p>
              Wanneer u FactuurBaas gebruikt om persoonsgegevens van uw klanten te verwerken, bent u de
              verwerkingsverantwoordelijke en verwerken wij deze gegevens als verwerker. De afspraken hierover zijn
              vastgelegd in onze{' '}
              <Link href="/verwerkersovereenkomst" className="text-warm-orange hover:underline">
                verwerkersovereenkomst (DPA)
              </Link>
              , die onderdeel uitmaakt van onze dienstverlening en die u bij login/accountaanmaak aanvaardt. Een
              ondertekende versie van de DPA is op verzoek beschikbaar via{' '}
              <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
                mail@factuurbaas.nl
              </a>
              .
            </p>

            <h2>6. Bewaartermijn</h2>
            <p>
              Opgeslagen facturen, klanten en profielgegevens (inclusief referralcode, referral-toeschrijving en
              linkbezoekenteller) bewaren we totdat u ze verwijdert of uw account verwijdert. Gastmodus-gegevens
              verdwijnen met uw browsergegevens. Anonieme logs kunnen voor statistiek worden bewaard, zonder
              factuurinhoud. Transactionele e-mails kunnen kort bij Resend zichtbaar zijn in verzendlogs volgens
              hun retentie; wij gebruiken die niet voor marketing.
            </p>

            <h2>7. Beveiliging, back-ups en beschikbaarheid</h2>
            <p>We nemen redelijke maatregelen, waaronder:</p>
            <ul>
              <li>
                <strong>Row Level Security (RLS):</strong> alleen de ingelogde eigenaar kan eigen facturen,
                klanten en profiel lezen of wijzigen op databaseniveau;
              </li>
              <li>privélogo-opslag; HTTPS in transit;</li>
              <li>service role-sleutels alleen op de server;</li>
              <li>
                <strong>Back-ups:</strong> we maken gebruik van de geautomatiseerde databaseback-ups van Supabase
                voor onze EU-regio. Daarmee kunnen we bij technische problemen streven naar herstel van
                opgeslagen accountgegevens. We raden u aan belangrijke facturen <strong>ook zelf als PDF</strong>{' '}
                te bewaren.
              </li>
            </ul>
            <p>
              Meer uitleg: zie onze pagina{' '}
              <Link href="/veiligheid" className="text-warm-orange hover:underline">
                Veiligheid
              </Link>
              . Geen systeem is 100% waterdicht; bij een incident handelen we volgens de AVG.
            </p>

            <h2>8. Uw rechten (AVG)</h2>
            <ul>
              <li>inzage en correctie;</li>
              <li>export (JSON/CSV in het dashboard);</li>
              <li>verwijderen van facturen, klanten of uw hele account (met bevestigingsmail);</li>
              <li>bezwaar of beperking waar de wet dat toelaat.</li>
            </ul>
            <p>
              Contact:{' '}
              <a href="mailto:mail@factuurbaas.nl" className="text-warm-orange hover:underline">
                mail@factuurbaas.nl
              </a>
            </p>

            <h2>9. Cookies en lokale opslag</h2>
            <p>
              We gebruiken functionele cookies/local storage die nodig zijn voor de werking van de site, plus
              optionele analytische/marketingcookies via de cookiebanner.
            </p>
            <ul>
              <li>
                <strong>Noodzakelijk / functioneel:</strong> login-sessie (Supabase Auth); cookievoorkeuren;
                tijdelijke opslag van een referralcode (<code>fb_referral_code</code>) nadat u via een Baas-link
                (<code>?ref=</code>) binnenkomt, zodat we de uitnodiging kunnen koppelen als u later een account
                aanmaakt; session-markering om dubbele linkbezoeken in hetzelfde browsertabblad te beperken;
                optioneel een tijdelijke markering dat u als gast een factuur heeft gemaakt (conversiemeting na
                accountaanmaak, zonder factuurinhoud); privacy-akkoord in afwachting van login.
              </li>
              <li>
                <strong>Analytisch / marketing (optioneel):</strong> alleen met uw toestemming via de
                cookiebanner (bijv. anonieme pageviews via Vercel Analytics waar van toepassing).
              </li>
            </ul>
            <p>
              Referral-attribuut en linkbezoekentelling zijn <strong>first-party</strong> en horen bij de
              Baas-statusfunctie; we gebruiken ze niet voor advertentienetwerken van derden. U kunt lokale
              opslag wissen via uw browserinstellingen; dan kan een latere accountaanmaak mogelijk niet meer aan
              de uitnodiging worden gekoppeld.
            </p>

            <h2>10. Kinderen</h2>
            <p>
              De dienst is gericht op ondernemers, niet op kinderen onder 16. Neem contact op als u denkt dat een
              kind gegevens heeft achtergelaten.
            </p>

            <h2>11. Wijzigingen</h2>
            <p>
              We kunnen dit beleid bijwerken. De actuele versie staat hier met datum. Bij materiële wijzigingen
              vragen we opnieuw om akkoord waar dat passend is.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="group flex items-center justify-center font-heading text-md font-bold text-deep-blue transition-colors hover:text-warm-orange"
            >
              <Crown className="mr-2 h-6 w-6 text-warm-orange transition-transform group-hover:scale-110" />
              FactuurBaas.nl
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
