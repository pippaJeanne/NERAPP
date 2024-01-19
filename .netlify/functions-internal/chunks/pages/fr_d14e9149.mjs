import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_27d841b6.mjs';
import 'clsx';
import { $ as $$Main } from './en_9d29cf35.mjs';
import 'html-escaper';
/* empty css                        *//* empty css                        */
const html = "<p>Il s’agit d’une application Web simple pour la reconnaissance d’entités nommées (NER) et le balisage TEI. Elle utilise la bibliothèque <a href=\"https://github.com/spencermountain/compromise\">Compromise.js</a> pour le TAL (traitement automatique du langage naturel) en JavaScript. Celle-ci permet de reconnaître des entités de base telles que des personnes, des lieux et des organisations.</p>\n<p>Compromise.js est entraîné sur un ensemble de langues modernes. L’application est donc capable de reconnaître des entités dans plusieurs langues. Toutefois, le balisage de dates n’est pas inclus dans l’interface en français car les dates en français ne sont pas bien reconnues.</p>\n<p>Ce baliseur d’entités nommées est très simple à utiliser. Téléversez tout simplement votre document XML et cliquez sur le bouton de <em>traiter le fichier</em> pour trouver votre fichier de sortie dans votre dossier de téléchargements.</p>\n<p><em><strong>Note :</strong></em> L’application effectue un simple pré-balisage pour identifier autant d’entités que le permettent les modèles afin de faciliter le processus d’encodage d’entités nommées. C’est-à-dire seulement la balise est rajoutée dans le fichier, sans les attributs, par exemple : &#x3C;persName>William&#x3C;/persName&#x26;gt. Il est également possible de retrouver quelques erreurs de balisage si l’entité n’a pas été reconnue correctement. Un processus de nettoyage et enrichissement selon votre protocole éditorial pourrait donc être nécessaire par la suite.</p>";

				const frontmatter = {"layout":"../layouts/Main.astro","title":"Baliseur d'entités nommées pour le TEI","lang":"FR","label":"Téléversez votre fichier XML-TEI","btn":"Traiter le fichier","code":"form.cjs"};
				const file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/fr.md";
				const url = "/fr";
				function rawContent() {
					return "Il s'agit d'une application Web simple pour la reconnaissance d'entités nommées (NER) et le balisage TEI. Elle utilise la bibliothèque <a href=\"https://github.com/spencermountain/compromise\">Compromise.js</a> pour le TAL (traitement automatique du langage naturel) en JavaScript. Celle-ci permet de reconnaître des entités de base telles que des personnes, des lieux et des organisations.\n\nCompromise.js est entraîné sur un ensemble de langues modernes. L'application est donc capable de reconnaître des entités dans plusieurs langues. Toutefois, le balisage de dates n'est pas inclus dans l'interface en français car les dates en français ne sont pas bien reconnues.\n\nCe baliseur d'entités nommées est très simple à utiliser. Téléversez tout simplement votre document XML et cliquez sur le bouton de *traiter le fichier* pour trouver votre fichier de sortie dans votre dossier de téléchargements.\n\n***Note :*** L'application effectue un simple pré-balisage pour identifier autant d'entités que le permettent les modèles afin de faciliter le processus d'encodage d'entités nommées. C'est-à-dire seulement la balise est rajoutée dans le fichier, sans les attributs, par exemple : &lt;persName&gt;William&lt;/persName&gt. Il est également possible de retrouver quelques erreurs de balisage si l'entité n'a pas été reconnue correctement. Un processus de nettoyage et enrichissement selon votre protocole éditorial pourrait donc être nécessaire par la suite.";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
