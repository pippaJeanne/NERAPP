import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../astro_27d841b6.mjs';
import 'clsx';
/* empty css                           */import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const logo = "/frontpic.png";
  return renderTemplate`${maybeRenderHead()}<figure data-astro-cid-j7pv25f6><a href="./en" id="logo" data-astro-cid-j7pv25f6><img${addAttribute(logo, "src")} data-astro-cid-j7pv25f6></a><figcaption data-astro-cid-j7pv25f6><a href="https://tei-c.org/" target="_blank" data-astro-cid-j7pv25f6><span id="text" data-astro-cid-j7pv25f6>iStock.com/Aditya Mawardi</span></a></figcaption></figure>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro", void 0);

const $$file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
