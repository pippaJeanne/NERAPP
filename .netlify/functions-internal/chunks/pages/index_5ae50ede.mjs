import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, h as addAttribute } from '../astro_37c187a7.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Named Entity TEI tagger</title>", `</head><body data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Named Entity TEI tagger</h1><p data-astro-cid-j7pv25f6>This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href="https://github.com/spencermountain/compromise" data-astro-cid-j7pv25f6>Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.</p><p data-astro-cid-j7pv25f6>This NER app is very simple to use. Just upload your XML document and click on the process button and find your output file in your downloads set folder.</p><p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6><em data-astro-cid-j7pv25f6>Note: </em></strong><em data-astro-cid-j7pv25f6>The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, a cleaning process is necessary afterwards.</em></p><div class="container" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6><label for="file" data-astro-cid-j7pv25f6>Upload your XML-TEI file</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><button data-astro-cid-j7pv25f6>Process file</button></div></div><!--<script is:inline src="https://unpkg.com/compromise@14.10.0"><\/script>
	<script type="text/javascript">


var txtdata = "";
const btn = document.querySelector('button');
btn.addEventListener('click', handleSubmit);

function handleSubmit() {
     console.log(this)
 const file = document.querySelector('input');
 console.log(file)
 readfile(file); 
 
} 

function readfile(file){
    
    const read = new FileReader();
    console.log(read)
    read.onload = function result(ev){
      var txtdata = "";
        //console.log(ev);
        //let output = document.createElement('div');
        //output.setAttribute('class', "output");
        
        //output.appendChild(a);
        //document.querySelector('.container div').appendChild(output);
        const text = ev.target.result; 
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const select = xml.querySelectorAll('div2:not(div2[type="forematter"]) *');
        const select1 = xml.querySelectorAll('div2 *');
        const select2 = xml.querySelectorAll('body *');
        
        for (var n of select2){
            var txtcont = n.textContent.toString()
            
            txtdata += txtcont + " "; 
        }
      
var doc = nlp(txtdata);
const people =[];
const places = [];
const orgs =[];
const ents = {};
for (var person in doc.people().json()){
  if (people.indexOf(doc.people().json()[person].text)==-1){
  people.push(doc.people().json()[person].text)
}}
for (var place in doc.places().json()){
  if (places.indexOf(doc.places().json()[place].text)==-1){
  places.push(doc.places().json()[place].text)
    }}
for (var org in doc.organizations().json()){
  if (orgs.indexOf(doc.organizations().json()[org].text)==-1){
  orgs.push(doc.organizations().json()[org].text)
}}
//ents.person = people;
//ents.place = places;
//ents.org = orgs;
var txt = text;
for(var pers in people){
 txt = txt.replaceAll(people[pers], \`<persName>\${people[pers]}</persName/>\`)};
for(var pl in places){txt = txt.replaceAll(places[pl], \`<placeName>\${places[pl]}</placeName/>\`)};
for(var org in orgs){txt = txt.replaceAll(orgs[org], \`<orgName>\${orgs[org]}</orgName/>\`)};


// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      const a = document.createElement('a');
        const outfile = new Blob([txt], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = \`ner_\${file.files[0].name}\`;
        a.click();
        URL.revokeObjectURL(a.href);
        
  
    };
    read.readAsText(file.files[0]) 
} 
 
 <\/script> --></body></html>`], ['<html lang="en" data-astro-cid-j7pv25f6><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Named Entity TEI tagger</title>", `</head><body data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Named Entity TEI tagger</h1><p data-astro-cid-j7pv25f6>This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href="https://github.com/spencermountain/compromise" data-astro-cid-j7pv25f6>Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.</p><p data-astro-cid-j7pv25f6>This NER app is very simple to use. Just upload your XML document and click on the process button and find your output file in your downloads set folder.</p><p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6><em data-astro-cid-j7pv25f6>Note: </em></strong><em data-astro-cid-j7pv25f6>The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, a cleaning process is necessary afterwards.</em></p><div class="container" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6><label for="file" data-astro-cid-j7pv25f6>Upload your XML-TEI file</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><button data-astro-cid-j7pv25f6>Process file</button></div></div><!--<script is:inline src="https://unpkg.com/compromise@14.10.0"><\/script>
	<script type="text/javascript">


var txtdata = "";
const btn = document.querySelector('button');
btn.addEventListener('click', handleSubmit);

function handleSubmit() {
     console.log(this)
 const file = document.querySelector('input');
 console.log(file)
 readfile(file); 
 
} 

function readfile(file){
    
    const read = new FileReader();
    console.log(read)
    read.onload = function result(ev){
      var txtdata = "";
        //console.log(ev);
        //let output = document.createElement('div');
        //output.setAttribute('class', "output");
        
        //output.appendChild(a);
        //document.querySelector('.container div').appendChild(output);
        const text = ev.target.result; 
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const select = xml.querySelectorAll('div2:not(div2[type="forematter"]) *');
        const select1 = xml.querySelectorAll('div2 *');
        const select2 = xml.querySelectorAll('body *');
        
        for (var n of select2){
            var txtcont = n.textContent.toString()
            
            txtdata += txtcont + " "; 
        }
      
var doc = nlp(txtdata);
const people =[];
const places = [];
const orgs =[];
const ents = {};
for (var person in doc.people().json()){
  if (people.indexOf(doc.people().json()[person].text)==-1){
  people.push(doc.people().json()[person].text)
}}
for (var place in doc.places().json()){
  if (places.indexOf(doc.places().json()[place].text)==-1){
  places.push(doc.places().json()[place].text)
    }}
for (var org in doc.organizations().json()){
  if (orgs.indexOf(doc.organizations().json()[org].text)==-1){
  orgs.push(doc.organizations().json()[org].text)
}}
//ents.person = people;
//ents.place = places;
//ents.org = orgs;
var txt = text;
for(var pers in people){
 txt = txt.replaceAll(people[pers], \\\`<persName>\\\${people[pers]}</persName/>\\\`)};
for(var pl in places){txt = txt.replaceAll(places[pl], \\\`<placeName>\\\${places[pl]}</placeName/>\\\`)};
for(var org in orgs){txt = txt.replaceAll(orgs[org], \\\`<orgName>\\\${orgs[org]}</orgName/>\\\`)};


// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      const a = document.createElement('a');
        const outfile = new Blob([txt], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = \\\`ner_\\\${file.files[0].name}\\\`;
        a.click();
        URL.revokeObjectURL(a.href);
        
  
    };
    read.readAsText(file.files[0]) 
} 
 
 <\/script> --></body></html>`])), addAttribute(Astro2.generator, "content"), renderHead());
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro", void 0);

const $$file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
