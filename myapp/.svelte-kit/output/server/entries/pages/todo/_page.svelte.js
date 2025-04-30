import { n as spread_props, m as pop, p as push, u as ensure_array_like } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Plus($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  Icon($$payload, spread_props([
    { name: "plus" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Trash($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
    ],
    [
      "path",
      { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "trash" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let notes = [];
  const each_array = ensure_array_like(notes);
  $$payload.out += `<main class="h-screen w-full"><h1 class="p-20 text-center text-4xl font-bold">TO DO LIST</h1> <span class="block w-full border border-b-cyan-800"></span> <div class="flex w-full justify-center"><button class="my-5 rounded-lg border bg-purple-600 p-4 font-semibold ease-linear hover:bg-purple-400">`;
  Plus($$payload, {});
  $$payload.out += `<!----></button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <section class="mx-6 grid grid-cols-2 gap-6 px-4 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let note = each_array[$$index];
    $$payload.out += `<article class="relative rounded-2xl bg-gray-400 p-4"><button class="absolute right-2 top-2 rounded-md bg-transparent p-1 hover:bg-white">`;
    Trash($$payload, { class: " stroke-3 size-6 text-red-700" });
    $$payload.out += `<!----></button> <p class="absolute left-2 top-2 text-xs text-white">ID:${escape_html(note.id)}</p> <h1 class="p-2 text-center text-2xl font-bold text-white">${escape_html(note.header)}</h1> <p class="bg-gray-400 p-2" p="">${escape_html(note.description)}</p></article>`;
  }
  $$payload.out += `<!--]--></section></main>`;
  pop();
}
export {
  _page as default
};
