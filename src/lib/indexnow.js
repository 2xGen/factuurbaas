export const INDEXNOW_HOST = 'factuurbaas.nl';

/** Public verification key — hosted at /{key}.txt per IndexNow protocol. */
export const INDEXNOW_KEY = 'f355b468714d4f7696d7bd0171da2518';

export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';

const MAX_URLS_PER_REQUEST = 10_000;

/**
 * Submit URLs to IndexNow (Bing, Yandex, etc.).
 * @param {string[]} urlList — absolute URLs on factuurbaas.nl
 * @returns {Promise<{ ok: boolean, status: number, statusText: string }>}
 */
export async function submitUrlsToIndexNow(urlList) {
  const urls = [...new Set(urlList.filter(Boolean))];

  if (urls.length === 0) {
    return { ok: false, status: 400, statusText: 'No URLs provided' };
  }

  if (urls.length > MAX_URLS_PER_REQUEST) {
    return {
      ok: false,
      status: 400,
      statusText: `Too many URLs (${urls.length}). Max ${MAX_URLS_PER_REQUEST} per request.`,
    };
  }

  const response = await fetch(INDEXNOW_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    }),
  });

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
  };
}
