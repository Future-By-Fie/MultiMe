/** Pure, dependency-free policy engine. NOT an authentication system. */
export const CONTEXTS = Object.freeze(['work','hobby','personal']);
export const AUDIENCES = Object.freeze(['public','connections','private']);
export function createProfile(id, context, fields = {}) {
  if (!CONTEXTS.includes(context)) throw new RangeError('Invalid context');
  if (typeof id !== 'string' || !id.trim()) throw new TypeError('Invalid id');
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) throw new TypeError('Invalid fields');
  const normalized = {};
  for (const [key, entry] of Object.entries(fields)) {
    if (!entry || typeof entry.value !== 'string' || !AUDIENCES.includes(entry.visibility)) throw new TypeError('Invalid field: ' + key);
    normalized[key] = { value: entry.value, visibility: entry.visibility };
  }
  return { id, context, fields: normalized };
}
export function previewProfile(profile, audience) {
  if (!AUDIENCES.includes(audience)) throw new RangeError('Invalid audience');
  if (!profile || !CONTEXTS.includes(profile.context) || !profile.fields || typeof profile.fields !== 'object') throw new TypeError('Invalid profile');
  const allowed = { public: ['public'], connections: ['public','connections'], private: ['public','connections','private'] }[audience];
  return Object.fromEntries(Object.entries(profile.fields).filter(([, field]) => field && allowed.includes(field.visibility)).map(([key, field]) => [key, field.value]));
}
export function switchContext(current, next) {
  if (!CONTEXTS.includes(current) || !CONTEXTS.includes(next)) throw new RangeError('Invalid context');
  return { context: next, changed: current !== next };
}
