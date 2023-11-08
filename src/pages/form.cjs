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
        //const select = xml.querySelectorAll('div2:not(div2[type="forematter"]) *');
        const select1 = xml.querySelectorAll('div2 *');
        
        for (var n of select1){
            var txtcont = n.textContent.toString();
            
            txtdata += txtcont + " ";
           
        }
//console.log(txtdata)

var nlp = require('compromise');
var doc = nlp(txtdata)
console.log(doc.topics().people().text());
console.log(nlp.text("Tony Hawk did a kickflip").people());     
        
/*
// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      /*  const a = document.createElement('a');
        const outfile = new Blob([text], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = `ner_${file.files[0].name}`;
        a.click();
        URL.revokeObjectURL(a.href);
        */ 
    };
    read.readAsText(file.files[0])
} 

