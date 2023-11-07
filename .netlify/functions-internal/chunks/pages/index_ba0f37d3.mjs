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
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Named Entity TEI tagger</title>", `</head><body data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Named Entity TEI tagger</h1><div class="container" data-astro-cid-j7pv25f6><!-- <form action="handlefile.js" method="post" enctype="multipart/form-data">--><div data-astro-cid-j7pv25f6><label for="file" data-astro-cid-j7pv25f6>Upload your XML-TEI file</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><button data-astro-cid-j7pv25f6>Process file</button></div></div><script type="text/javascript">
//import { notDeepEqual } from "assert";

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
        
        for (var n of select1){
            var txtcont = n.textContent.toString();
            
            txtdata += txtcont + " ";
           
        }
   
console.log(txtdata)
const spacy = require('spacy');

(async function() {
    const nlp = spacy.load('xx_ent_wiki_sm');
    const doc = await nlp(txtdata);
    for (let ent of doc.ents) {
        console.log(ent.text, ent.label);
    }
   /* for (let token of doc) {
        console.log(token.text, token.pos, token.head.text);
    }*/
})();
// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      /*  const a = document.createElement('a');
        const outfile = new Blob([text], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = \`ner_\${file.files[0].name}\`;
        a.click();
        URL.revokeObjectURL(a.href);
        */
  
    };
    read.readAsText(file.files[0])
} 


 
 <\/script></body></html>`], ['<html lang="en" data-astro-cid-j7pv25f6><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Named Entity TEI tagger</title>", `</head><body data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Named Entity TEI tagger</h1><div class="container" data-astro-cid-j7pv25f6><!-- <form action="handlefile.js" method="post" enctype="multipart/form-data">--><div data-astro-cid-j7pv25f6><label for="file" data-astro-cid-j7pv25f6>Upload your XML-TEI file</label><input id="file" name="file" type="file" accept="text/xml" data-astro-cid-j7pv25f6></div><div data-astro-cid-j7pv25f6><button data-astro-cid-j7pv25f6>Process file</button></div></div><script type="text/javascript">
//import { notDeepEqual } from "assert";

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
        
        for (var n of select1){
            var txtcont = n.textContent.toString();
            
            txtdata += txtcont + " ";
           
        }
   
console.log(txtdata)
const spacy = require('spacy');

(async function() {
    const nlp = spacy.load('xx_ent_wiki_sm');
    const doc = await nlp(txtdata);
    for (let ent of doc.ents) {
        console.log(ent.text, ent.label);
    }
   /* for (let token of doc) {
        console.log(token.text, token.pos, token.head.text);
    }*/
})();
// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      /*  const a = document.createElement('a');
        const outfile = new Blob([text], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = \\\`ner_\\\${file.files[0].name}\\\`;
        a.click();
        URL.revokeObjectURL(a.href);
        */
  
    };
    read.readAsText(file.files[0])
} 


 
 <\/script></body></html>`])), addAttribute(Astro2.generator, "content"), renderHead());
}, "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro", void 0);

const $$file = "/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
