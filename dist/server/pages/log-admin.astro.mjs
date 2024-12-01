/* empty css                                        */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_so53eHPT.mjs';
import 'kleur/colors';
import { $ as $$LayoutAdmin } from '../chunks/LayoutAdmin_Bkvk7Uli.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LogAdmin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutAdmin", $$LayoutAdmin, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<form id="loginForm" class="w-full max-w-md mx-auto p-4 rounded-lg shadow-md"> <h1 class="text-60 font-montserrat font-extrabold italic text-darkBlue">Log in</h1> <div class="mb-4"> <label for="username" class="block text-sm font-medium text-darkBlue mt-2">Username</label> <input type="text" id="username" name="username" class="block w-full mt-1 p-2 border border-darkBlue rounded text-sm" autocomplete="off" required> </div> <div class="mb-4"> <label for="password" class="block text-sm font-medium text-darkBlue mt-2">Password</label> <input type="password" id="password" name="password" class="block w-full mt-1 p-2 border border-darkBlue rounded text-sm" autocomplete="off" required> </div> <button type="submit" class="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Login</button> </form> <script src="/scripts/script-LogIn.js"><\/script> '])), maybeRenderHead()) })}`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/pages/log-admin.astro", void 0);

const $$file = "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/pages/log-admin.astro";
const $$url = "/log-admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LogAdmin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
