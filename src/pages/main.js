(()=>{"use strict";var e="";document.querySelector("button").addEventListener("click",(function(){console.log(this);const t=document.querySelector("input");console.log(t),function(t){const o=new FileReader;console.log(o),o.onload=function(t){const o=t.target.result,n=(new DOMParser).parseFromString(o,"text/xml").querySelectorAll("div2 *");for(var r of n){var c=r.textContent.toString();e+=c+" "}const l=require("spacy");!async function(){const t=l.load("xx_ent_wiki_sm"),o=await t(e);for(let e of o.ents)console.log(e.text,e.label)}()},o.readAsText(t.files[0])}(t)}))})();