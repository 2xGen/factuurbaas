/** @type {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: 'FactuurBaas',
    short_name: 'FactuurBaas',
    description: "Gratis facturen maken en bijhouden voor zzp'ers.",
    start_url: '/dashboard',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0A2A4D',
    theme_color: '#0A2A4D',
    lang: 'nl',
    categories: ['business', 'finance', 'productivity'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
