import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot, u as unescapeHTML } from '../astro_27d841b6.mjs';
import 'clsx';
/* empty css                        *//* empty css                        */
const $$Astro$1 = createAstro();
const $$LangBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LangBtn;
  const links = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/en.md": () => Promise.resolve().then(() => en),"../pages/fr.md": () => import('./fr_d14e9149.mjs'),"../pages/licence.md": () => import('./licence_31c2cfcf.mjs')}), () => "../pages/*.md");
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-enahu7k2><button aria-label="Language button" class="langBtn" data-astro-cid-enahu7k2>${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.frontmatter.lang, "id")} data-astro-cid-enahu7k2><strong data-astro-cid-enahu7k2>${link.frontmatter.lang}</strong></a>`)}<!--  <a href="./en" id="EN"><strong>EN</strong></a>
  <a href="./fr" id="FR"><strong>FR</strong></a>--></button></nav>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/components/langBtn.astro", void 0);

const $$Astro = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { lang, title, label, dates, btn, code } = Astro2.props.frontmatter;
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(lang, "class")}${addAttribute(lang, "data-idiom")} data-astro-cid-hsp6otuf><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Handlee&family=Inter:wght@200&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body data-astro-cid-hsp6otuf><main data-astro-cid-hsp6otuf>${renderComponent($$result, "LangBtn", $$LangBtn, { "data-astro-cid-hsp6otuf": true })}<h1 data-astro-cid-hsp6otuf>${title}</h1>${renderSlot($$result, $$slots["default"])}<div class="container" data-astro-cid-hsp6otuf><div data-astro-cid-hsp6otuf><label for="file" data-astro-cid-hsp6otuf>${label}</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-hsp6otuf></div><div id="dates" data-astro-cid-hsp6otuf><label for="incledDates" data-astro-cid-hsp6otuf>${dates}</label><input id="includeDates" type="checkbox" name="dates" data-astro-cid-hsp6otuf></div><div data-astro-cid-hsp6otuf><button id="process" data-astro-cid-hsp6otuf>${btn}</button></div></div><span${addAttribute(code, "data-code")} data-astro-cid-hsp6otuf></span></main></body></html>`;
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/layouts/Main.astro", void 0);

const html = "<p>This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href=\"https://github.com/spencermountain/compromise\">Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. The tagging for dates is not done by default since some projects do not need that many date tags and the algorithm may recognize even time expressions like “tomorrow” that may not be relevant for your project. An option to tell the program to include that tag is provided.</p>\n<p>Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.</p>\n<p>This NER app is very simple to use. Just upload your XML document (check the box if you need the date tags) and click on the process button to find your output file in your downloads set folder.</p>\n<p><em><strong>Note:</strong></em> The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &#x3C;persName>William&#x3C;/persName>, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, the file might need to be revised and enriched afterwards according to your editorial protocol.</p>";

				const frontmatter = {"layout":"../layouts/Main.astro","title":"Named Entity TEI Tagger","lang":"EN","label":"Upload your XML-TEI file","dates":"Include date entities","btn":"Process file","code":"form.cjs"};
				const file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/en.md";
				const url = "/en";
				function rawContent() {
					return "This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href=\"https://github.com/spencermountain/compromise\">Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. The tagging for dates is not done by default since some projects do not need that many date tags and the algorithm may recognize even time expressions like \"tomorrow\" that may not be relevant for your project. An option to tell the program to include that tag is provided.\n\nCompromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.\n\nThis NER app is very simple to use. Just upload your XML document (check the box if you need the date tags) and click on the process button to find your output file in your downloads set folder.\n\n***Note:*** The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, the file might need to be revised and enriched afterwards according to your editorial protocol.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Main, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const en = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, $$LangBtn as a, en as e };
