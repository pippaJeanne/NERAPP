import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_b68736cf.mjs';
import 'clsx';
/* empty css                           */import 'html-escaper';

const $$Astro$1 = createAstro();
const $$LangBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LangBtn;
  return renderTemplate`${maybeRenderHead()}<button aria-label="Language button" data-astro-cid-enahu7k2><a href="src/pages/index.astro" id="en" data-astro-cid-enahu7k2>En</a><a href="src/pages/fr.astro" id="fr" data-astro-cid-enahu7k2>Fr</a></button>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/components/langBtn.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" clas="en" data-astro-cid-j7pv25f6><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Named Entity TEI tagger</title>${renderHead()}</head><body data-astro-cid-j7pv25f6><div class="langBtn" data-astro-cid-j7pv25f6>${renderComponent($$result, "LangBtn", $$LangBtn, { "data-astro-cid-j7pv25f6": true })}</div><h1 data-astro-cid-j7pv25f6>Named Entity TEI tagger</h1><p data-astro-cid-j7pv25f6>This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href="https://github.com/spencermountain/compromise" data-astro-cid-j7pv25f6>Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. The tagging for dates is not done by default since some projects do not need that many date tags and the algorithm may recognize even time expressions like "tomorrow" that may not be relevant for your project. An option to tell the program to include that tag is provided.</p><p data-astro-cid-j7pv25f6>Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.</p><p data-astro-cid-j7pv25f6>This NER app is very simple to use. Just upload your XML document (check the box if you need the date tags) and click on the process button to find your output file in your downloads set folder.</p><p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6><em data-astro-cid-j7pv25f6>Note: </em></strong><em data-astro-cid-j7pv25f6>The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, a cleaning process is necessary afterwards.</em></p><div class="container" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6><label for="file" data-astro-cid-j7pv25f6>Upload your XML-TEI file</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><label for="incledDates" data-astro-cid-j7pv25f6>Include date entities</label><input id="includeDates" type="checkbox" name="dates" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><button id="process" data-astro-cid-j7pv25f6>Process file</button></div></div></body></html>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro", void 0);

const $$file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
