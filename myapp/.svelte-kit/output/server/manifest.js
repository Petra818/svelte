export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D-41hveu.js",app:"_app/immutable/entry/app.DlRSCMfw.js",imports:["_app/immutable/entry/start.D-41hveu.js","_app/immutable/chunks/Cjoq3q3K.js","_app/immutable/chunks/DFyOlxVv.js","_app/immutable/chunks/BFeDNbvB.js","_app/immutable/chunks/Bjp1oZvl.js","_app/immutable/entry/app.DlRSCMfw.js","_app/immutable/chunks/DFyOlxVv.js","_app/immutable/chunks/DmLtvXbc.js","_app/immutable/chunks/DcKXR_lx.js","_app/immutable/chunks/bYp5QrgS.js","_app/immutable/chunks/Bz5Sijcj.js","_app/immutable/chunks/Bjp1oZvl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calc",
				pattern: /^\/calc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/todo",
				pattern: /^\/todo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
