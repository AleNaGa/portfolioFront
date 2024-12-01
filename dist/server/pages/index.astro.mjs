/* empty css                                        */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, f as renderSlot, e as renderHead, a as addAttribute, b as createAstro } from '../chunks/astro/server_so53eHPT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class=" bg-gradient-to-r from-whiteBrkn via-azulMedio to-whiteBrkn text-darkBlue h-24 flex items-center flex-col gap-3"> <div class=" text-lg flex flex-row gap-3 font-montserrat font-medium italic pt-2"> <p class="" id="footerText-2"></p> <p class="" id="footerText-3"></p> <p class="" id="footerText-4"></p> <p class="" id="footerText-5"></p> <p class="" id="footerText-6"></p> <p class="" id="footerText-2"></p> <p class="" id="footerText-2"></p> <p class="" id="footerText-2"></p> <p class="" id="footerText-2"></p> <p class="" id="footerText-2"></p> </div> <div class="flex flex-row items-center font-roboto italic border-t-2 border-azulGris py-2"> <p class="" id="footerText-1"></p> </div> </footer>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link rel="stylesheet" href="/src/styles/global.css"><title>Portfolio</title>', '</head> <body class="bg-whiteBrkn w-screen overflow-x-hidden flex flex-col text-justify"> ', " ", ' <script src="/scripts/dynamic-lng.js"><\/script> <script src="/scripts/modal-form.js"><\/script> </body></html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const nav = [
    {
      id: "aboutMe",
      href: "#aboutMesection"
    },
    {
      id: "studies",
      href: "#studiessection"
    },
    {
      id: "skills",
      href: "#skillssection"
    },
    {
      id: "work",
      href: "#worksection"
    },
    {
      id: "projects",
      href: "#projectsection"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="py-3 px-6 fixed w-screen top-0 z-50 bg-whiteBrkn flex flex-row justify-between"> <ul class="flex gap-7 flex-row pl-14"> ${nav.map((item) => (
    // Recorremos el array de nav y generamos una lista de enlaces
    renderTemplate`<li> <a${addAttribute(item.href, "href")} class="text-darkBlue font-roboto italic font-medium text-30 hover:text-azulGris hover:drop-shadow-md"${addAttribute(item.id, "id")}></a> </li>`
  ))} </ul> <ul class="flex gap-7 flex-row pr-24"> <li> <a class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-2xl flex items-center" href="/log-admin"> <img src="admin.png" alt="admin" class="w-6 h-6 rounded-xl"> </a> </li> <li> <button class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-2xl flex items-center" id="btn-en"> <img src="en.jpg" alt="en" class="w-6 h-6 rounded-xl"> </button> </li> <li> <button class="transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-2xl flex items-center" id="btn-es"> <img src="es.png" alt="es" class="w-6 h-6 rounded-xl"> </button> </li> </ul> </nav>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/nav.astro", void 0);

const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-whiteBrkn p-4 rounded-l-lg flex flex-col items-center space-y-10 z-50"> <a href="https://www.linkedin.com/in/alejandro-navarro-97485030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="block w-12 h-12 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"> <img src="/linkedinLogo.png" alt="LinkedIn" class="w-full h-full object-cover"> </a> <a href="https://github.com/AleNaGa" target="_blank" class="block w-12 h-12 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"> <img src="/gitHubIcon.png" alt="GitHub" class="w-full h-full object-cover"> </a> <a href="#" id="open-form-link" class="block w-12 h-12 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"> <img src="/formIcon.png" alt="Formulario" class="w-full h-full object-cover"> </a> </div> <!--Formularion de contacto oculto --> <div id="form-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden justify-center items-center z-50"> <div class="bg-whiteBrkn p-8 rounded-lg shadow-lg w-96"> <h2 class="text-2xl font-montserrat font-semibold mb-4" id="form-title"></h2> <!-- mensaje de éxito --> <div id="success-message" class="hidden mb-4 text-green-500 font-roboto"></div> <form id="contact-form"> <label for="name" class="block mb-2 font-roboto" id="name-label"></label> <input type="text" id="name" name="name" class="border p-2 mb-4 w-full" pattern="[A-Z][a-zA-Z\s]*" title="Name must start with an uppercase letter." required> <label for="email" class="block mb-2 font-roboto" id="email-label"></label> <input type="email" id="email" name="email" class="border p-2 mb-4 w-full" required> <label for="message" class="block mb-2 font-roboto" id="message-label"></label> <textarea id="message" name="message" class="border p-2 mb-4 w-full" minlength="20" title="Message must be at least 20 characters long." required></textarea> <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded font-roboto" id="submit-button"></button> </form> </div> </div>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/sideBar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Studies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Studies;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row py-10 gap-32 border-l-2 border-azulGris border-opacity-70 p-10 justify-center transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-lg hover:bg-paleBlue hover:bg-opacity-40 duration-500 ease-in-out"> <div${addAttribute(id, "id")} class="flex justify-left align-middle flex-wrap flex-row w-1/3 gap-3"> <h3 class="text-3xl font-montserrat  italic font-semibold text-darkBlue text-left"${addAttribute(`${id}-title`, "id")}></h3> <p class="font-roboto font-bold italic text-20 text-crudo w-10/12"${addAttribute(`${id}-site`, "id")}></p> <p class="font-roboto font-bold italic text-20 text-darkBlue w-10/12"${addAttribute(`${id}-date`, "id")}></p> </div> <div class="flex justify-left align-middle flex-wrap flex-row w-1/2"> <p class="font-montserrat font-medium text-20 text-darkBlue w-10/12"${addAttribute(`${id}-description`, "id")}></p> </div> </div>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/studies.astro", void 0);

const $$Astro$2 = createAstro();
const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Work;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row justify-between p-10  bg-darkBlue rounded-full shadow-[4px_4px_6px_0px_rgba(0,0,0,0.2)]"> <div class="flex flex-col p-5 gap-2 w-3/4"> <h3 class="font-roboto font-bold italic text-xl text-whiteBrkn"${addAttribute(`${id}-title`, "id")}></h3> <p class="font-roboto font-light italic text-md text-paleBlue"${addAttribute(`${id}-date`, "id")}></p> <p class="font-montserrat font-light text-30 text-whiteBrkn text-wrap"${addAttribute(`${id}-description`, "id")}></p> </div> <div class="flex justify-center align-middle items-center w-[360px] h-[140px] bg-whiteBrkn p-2 rounded-full transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"> <a href="#"${addAttribute(`${id}-link`, "id")} class="block w-full h-full relative overflow-hidden rounded-full" target="_blank"> <!-- Imagen ajustada al contenedor --> <img class="object-cover w-full h-full"${addAttribute(`/${id}-img.png`, "src")}${addAttribute(`${id}-img`, "alt")}> </a> </div> </div>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/work.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skill;
  const { skill, level } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-md"> <div class="flex justify-between mb-1"> <span class="text-sm font-medium text-darkBlue"${addAttribute(`${skill}`, "id")}>${skill}</span> <span class="text-sm font-medium text-darkBlue">${level}%</span> </div> <div class="w-full h-4 bg-azulGris rounded-full"> <div class="h-4 bg-paleBlue rounded-full"${addAttribute(`width: ${level}%; `, "style")}></div> </div> </div> `;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/skill.astro", void 0);

const $$Astro = createAstro();
const $$References = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$References;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center bg-darkBlue p-6 w-1/4 rounded-3xl shadow-md hover:scale-105 transition-all duration-300 ease-in-out"> <img class="object-cover h-32 w-32 rounded-full border-4 border-whiteBrkn shadow-lg"${addAttribute(`/references/${id}.png`, "src")}${addAttribute(`${id}.png`, "alt")}${addAttribute(`${id}.png`, "id")}> <div class="flex flex-col justify-center ml-6 text-whiteBrkn w-2/3"> <h4 class="text-xl font-montserrat font-bold text-whiteBrkn mb-2"${addAttribute(`${id}-title`, "id")}></h4> <p class="font-montserrat text-sm text-whiteBrkn mb-3 text-left"${addAttribute(`${id}-description`, "id")}></p> <p class="font-montserrat text-xs text-crudo"${addAttribute(`${id}-contact`, "id")}></p> </div> </div>`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/References.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "class": "z-50" })} ${renderComponent($$result2, "SideBar", $$SideBar, {})} ${maybeRenderHead()}<div class="pt-10 pr-24 pl-20 w-screen h-screen flex flex-row justify-center" id="aboutMesection"> <div class="bg-gradient-to-l from-paleBlue to-whiteBrkn flex flex-row justify-center align-middle relative overflow-hidden"> <!-- Gradiente hacia abajo --> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-whiteBrkn z-10"></div> <div class="flex-1 flex justify-center flex-wrap p-20 flex-col gap-28 relative z-20"> <div> <h1 class="text-60 font-montserrat font-extrabold italic text-wrap text-darkBlue drop-shadow-lg" id="aboutMeTitle"></h1> <h3 class="text-3xl font-montserrat italic font-semibold text-crudo drop-shadow-md" id="aboutMeSubtitle"></h3> </div> <div class="text-wrap"> <p class="font-montserrat font-medium text-20 text-darkBlue w-10/12" id="aboutMePhrase"></p> </div> </div> <div class="flex-1 justify-start align-middle relative z-20"> <img class="h-full pt-5" src="/profile.png" alt="alex"> </div> </div> </div> <div class="px-20 w-screen h-min-screen flex" id="studiessection"> <div class="flex-1 flex justify-left align-middle flex-col py-20 gap-10"> <h1 class="text-60 font-montserrat font-extrabold italic text-darkBlue" id="studiesTitle"></h1> <div class="flex flex-col px-10 gap-10"> ${renderComponent($$result2, "Studies", $$Studies, { "id": "studies1" })} ${renderComponent($$result2, "Studies", $$Studies, { "id": "studies2" })} ${renderComponent($$result2, "Studies", $$Studies, { "id": "studies3" })} ${renderComponent($$result2, "Studies", $$Studies, { "id": "studies4" })} </div> </div> </div> <div class="px-20 w-screen h-screen flex" id="skillssection"> <div class="flex-1 flex justify-left align-middle flex-col py-20 gap-10 w-full"> <h1 class="text-60 font-montserrat font-extrabold italic text-darkBlue" id="skillsTitle"></h1> <h3 class="px-10 text-3xl font-montserrat italic font-semibold text-azulGris" id="hardskills"></h3> <div class="flex flex-wrap px-10 gap-5"> ${renderComponent($$result2, "Skill", $$Skill, { "skill": "HTML", "level": 57 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "CSS", "level": 39 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Tailwind", "level": 63 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Java", "level": 97 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "JavaScript", "level": 85 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "PHP", "level": 59 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "MySQL", "level": 93 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Python", "level": 47 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "SpringBoot", "level": 57 })} </div> <h3 class="px-10 text-3xl font-montserrat italic font-semibold text-azulGris text-wrap" id="softskills"></h3> <div class="flex flex-wrap px-10 gap-5"> ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Comunication", "level": 95 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Teamwork", "level": 100 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Critical Thinking", "level": 89 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Leadership", "level": 79 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Creativity", "level": 93 })} ${renderComponent($$result2, "Skill", $$Skill, { "skill": "Problem Solving", "level": 100 })} </div> </div> </div> <div class="px-20 w-screen h-min-screen flex" id="worksection"> <div class="flex-1 flex justify-left align-middle flex-col py-20 gap-10 w-full"> <h1 class="text-60 font-montserrat font-extrabold italic text-darkBlue" id="workTitle"></h1> <div class="flex flex-col gap-10 px-10"> ${renderComponent($$result2, "Work", $$Work, { "id": "work1" })} ${renderComponent($$result2, "Work", $$Work, { "id": "work2" })} ${renderComponent($$result2, "Work", $$Work, { "id": "work3" })} <h1 class="text-30 font-montserrat font-extrabold italic text-darkBlue" id="referencesTitle"></h1> <div class="flex flex-row gap-4 w-full justify-center" id="referencessection"> ${renderComponent($$result2, "References", $$References, { "id": "reference1" })} ${renderComponent($$result2, "References", $$References, { "id": "reference2" })} ${renderComponent($$result2, "References", $$References, { "id": "reference3" })} ${renderComponent($$result2, "References", $$References, { "id": "reference4" })} </div> </div> </div> </div> <div class="px-20 w-screen h-min-screen flex" id="projectsection"> <div class="flex-1 flex justify-left align-middle flex-col py-20 gap-10 w-full"> <h1 class="text-60 font-montserrat font-extrabold italic text-darkBlue" id="projectTitle"></h1> <div class="flex flex-row gap-5 px-10"> ${renderComponent($$result2, "CardGenerator", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/components/CardGenerator.jsx", "client:component-export": "default" })} </div> </div> </div> ` })}`;
}, "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alejandro/Desktop/pruebaDespliegue/portfolioFront/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
