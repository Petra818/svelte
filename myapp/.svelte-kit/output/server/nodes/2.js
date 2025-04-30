

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bcgx92rb.js","_app/immutable/chunks/DcKXR_lx.js","_app/immutable/chunks/DFyOlxVv.js"];
export const stylesheets = [];
export const fonts = [];
