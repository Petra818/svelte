import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
function _page($$payload) {
  let input1 = "";
  let input2 = "";
  let operator = "";
  $$payload.out += `<main class="mx-auto flex w-full flex-col items-center justify-center"><h1 class="p-20 text-center text-4xl font-bold">CALCULATION</h1> <span class="rounded-4xl block w-full border-b-cyan-800"></span> <article class="max-w-xl"><section class="text-white"><div class="relative flex h-[60px] flex-col items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-gray-700 p-6"><div class="display">${escape_html(input1)}${escape_html(operator)}${escape_html(input2)}</div></div></section> <div class="relative flex justify-center rounded-bl-2xl rounded-br-2xl bg-black"><div class="rounded-4xl flex flex-col items-center bg-black p-6"><div class="grid grid-cols-4 gap-10 text-blue-100"><button>1</button> <button>2</button> <button>3</button> <button>+</button> <button>4</button> <button>5</button> <button>6</button> <button>-</button> <button>7</button> <button>8</button> <button>9</button> <button>*</button> <button>0</button> <button>C</button> <button>=</button> <button>/</button></div></div></div></article></main>`;
}
export {
  _page as default
};
