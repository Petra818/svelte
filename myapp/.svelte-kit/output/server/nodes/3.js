

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calc/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DwJQ_GT3.js","_app/immutable/chunks/DcKXR_lx.js","_app/immutable/chunks/DFyOlxVv.js","_app/immutable/chunks/DmLtvXbc.js"];
export const stylesheets = [];
export const fonts = [];
