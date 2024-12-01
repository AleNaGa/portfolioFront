import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_so53eHPT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$LayoutAdmin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutAdmin;
  return renderTemplate`<!-- Layout para las secciones de administración sin elementos como el footer --><html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/global.css"><title>admin</title>${renderHead()}</head> <body class="bg-whiteBrkn w-screen flex flex-col text-justify p-6"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/layouts/LayoutAdmin.astro", void 0);

export { $$LayoutAdmin as $ };
