import "clsx";
import { n as spread_props, m as pop, p as push } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
function Gem($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M6 3h12l4 6-10 13L2 9Z" }],
    ["path", { "d": "M11 3 8 9l4 13 4-13-3-6" }],
    ["path", { "d": "M2 9h20" }]
  ];
  Icon($$payload, spread_props([
    { name: "gem" },
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
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="m-auto max-w-6xl"><header class="border flex justify-between bg-violet-600 px-10"><span>`;
  Gem($$payload, { class: " size-20 stroke-2 text-yellow-500" });
  $$payload.out += `<!----></span> <div class="mx-7 text-3xl space-x-6 pt-6"><a class="font-bold" href="/">HOME</a> <a class="font-bold" href="/todo">TO DO</a> <a class="font-bold" href="/calc">CALCULATOR</a> <a class="font-bold" href="/">BACK</a></div></header> <main>`;
  children($$payload);
  $$payload.out += `<!----></main></div>`;
}
export {
  _layout as default
};
