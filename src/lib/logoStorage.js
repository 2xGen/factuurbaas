/**
 * Private logo storage: DB holds only the storage path (no long-lived signed URLs).
 * Signed URLs are created short-lived when needed for display / PDF.
 */

export const LOGO_BUCKET = 'user-logos';
/** Short-lived access for preview/PDF (1 hour). */
export const LOGO_SIGNED_TTL_SEC = 60 * 60;

export function isDataUrl(value) {
  return typeof value === 'string' && value.startsWith('data:');
}

export function isHttpUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value);
}

/** Storage object path like `userId/logo.png` (not a URL). */
export function isStoragePath(value) {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    !isDataUrl(value) &&
    !isHttpUrl(value) &&
    !value.includes('://')
  );
}

/**
 * Extract object path from a Supabase signed/public URL for our bucket.
 * Returns null if not our bucket URL.
 */
export function pathFromLogoUrl(url) {
  if (!url || typeof url !== 'string') return null;
  if (isStoragePath(url)) return url;

  try {
    const u = new URL(url);
    const marker = `/object/sign/${LOGO_BUCKET}/`;
    const publicMarker = `/object/public/${LOGO_BUCKET}/`;
    let idx = u.pathname.indexOf(marker);
    if (idx !== -1) {
      return decodeURIComponent(u.pathname.slice(idx + marker.length));
    }
    idx = u.pathname.indexOf(publicMarker);
    if (idx !== -1) {
      return decodeURIComponent(u.pathname.slice(idx + publicMarker.length));
    }
  } catch {
    // ignore
  }
  return null;
}

/** Normalize whatever is in DB to a storage path when possible. */
export function normalizeLogoRef(logoRef) {
  if (!logoRef || typeof logoRef !== 'string') return null;
  if (isDataUrl(logoRef)) return logoRef;
  if (isStoragePath(logoRef)) return logoRef;
  return pathFromLogoUrl(logoRef) || logoRef;
}

export async function createLogoSignedUrl(supabase, path, expiresIn = LOGO_SIGNED_TTL_SEC) {
  if (!path || !isStoragePath(path)) return null;
  const { data, error } = await supabase.storage.from(LOGO_BUCKET).createSignedUrl(path, expiresIn);
  if (error) throw error;
  return data?.signedUrl || null;
}

/**
 * Resolve a stored logo ref to something an <img> / PDF can use.
 * Paths → short signed URL; data URLs pass through; legacy foreign URLs pass through.
 */
export async function resolveLogoForDisplay(supabase, logoRef) {
  if (!logoRef) return null;
  if (isDataUrl(logoRef)) return logoRef;

  const path = normalizeLogoRef(logoRef);
  if (path && isStoragePath(path)) {
    try {
      return await createLogoSignedUrl(supabase, path);
    } catch (err) {
      console.warn('Logo signed URL failed:', err.message);
      return null;
    }
  }

  if (isHttpUrl(logoRef)) return logoRef;
  return null;
}

/**
 * Upload a data-URL logo; returns storage path only (never a signed URL).
 */
export async function uploadLogoDataUrl(supabase, userId, dataUrl, fileBaseName = 'logo') {
  if (!isDataUrl(dataUrl)) {
    return normalizeLogoRef(dataUrl);
  }

  const res = await fetch(dataUrl);
  const blob = await res.blob();
  const ext = (blob.type.split('/')[1] || 'png').replace(/[^a-z0-9]/gi, '') || 'png';
  const path = `${userId}/${fileBaseName}.${ext}`;

  const { error } = await supabase.storage.from(LOGO_BUCKET).upload(path, blob, {
    upsert: true,
    contentType: blob.type || `image/${ext}`,
  });
  if (error) throw error;
  return path;
}
