import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderHead, i as renderComponent } from '../astro_6a89e662.mjs';
import 'clsx';
/* empty css                        *//* empty css                        */import 'html-escaper';

const $$Astro$1 = createAstro();
const $$LangBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LangBtn;
  return renderTemplate`${maybeRenderHead()}<button aria-label="Language button" data-astro-cid-enahu7k2><a href="src/pages/index.astro" id="en" data-astro-cid-enahu7k2>En</a><a href="src/pages/fr.astro" id="fr" data-astro-cid-enahu7k2>Fr</a></button>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/components/langBtn.astro", void 0);

const $$Astro = createAstro();
const $$Fr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fr;
  return renderTemplate`<html lang="en" clas="en" data-astro-cid-w42krqtb><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Baliseur d'entités nommées pour le TEI</title>${renderHead()}</head><body data-astro-cid-w42krqtb><div class="langBtn" data-astro-cid-w42krqtb>${renderComponent($$result, "LangBtn", $$LangBtn, { "data-astro-cid-w42krqtb": true })}</div><h1 data-astro-cid-w42krqtb>Baliseur d'entités nommées pour le TEI</h1><p data-astro-cid-w42krqtb>This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href="https://github.com/spencermountain/compromise" data-astro-cid-w42krqtb>Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. The tagging for dates is not done by default since some projects do not need that many date tags and the algorithm may recognize even time expressions like "tomorrow" that may not be relevant for your project. An option to tell the program to include that tag is provided.</p><p data-astro-cid-w42krqtb>Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.</p><p data-astro-cid-w42krqtb>This NER app is very simple to use. Just upload your XML document (check the box if you need the date tags) and click on the process button to find your output file in your downloads set folder.</p><p data-astro-cid-w42krqtb><strong data-astro-cid-w42krqtb><em data-astro-cid-w42krqtb>Note: </em></strong><em data-astro-cid-w42krqtb>The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, a cleaning process is necessary afterwards.</em></p><div class="container" data-astro-cid-w42krqtb><div data-astro-cid-w42krqtb><label for="file" data-astro-cid-w42krqtb>Téléversez votre fichier XML-TEI</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-w42krqtb></div><div data-astro-cid-w42krqtb><div data-astro-cid-w42krqtb><button id="process" data-astro-cid-w42krqtb>Processer le fichier</button></div></div></div></body></html>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/fr.astro", void 0);

const $$file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/fr.astro";
const $$url = "/fr";

export { $$Fr as default, $$file as file, $$url as url };
