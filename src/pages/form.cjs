var txtdata = "";
const btn = document.querySelector('button');
btn.addEventListener('click', handleSubmit);
const include = document.querySelector('input[name=dates]');
include.addEventListener('change', check);
var checked = false;
function check(){
  console.log(this.checked)
  if (this.checked){checked=true}
  else{checked=false}
};

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
        const select1 = xml.querySelectorAll('body *');
        for (var n of select1){
            var txtcont = n.textContent.toString();
            
            txtdata += txtcont + " ";
           
        }
        
var nlp = require('compromise');
nlp.extend(require('compromise-dates'))
var doc = nlp(txtdata);
const people =[];
const places = [];
const orgs =[];
const dates = [];
for (var person in doc.people().json()){
  if (people.indexOf(doc.people().json()[person].text)==-1){
  people.push(doc.people().json()[person].text)
}}
for (var place in doc.places().json()){
    if (places.indexOf(doc.places().json()[place].text)==-1){ 
   if (doc.places().json()[place].text !== "." && doc.places().json()[place].text !== "que"){
    places.push(doc.places().json()[place].text)
      }}}
for (var org in doc.organizations().json()){
  if (orgs.indexOf(doc.organizations().json()[org].text)==-1){
  orgs.push(doc.organizations().json()[org].text)
}}

  if(checked){
    for (var date of doc.dates().out('array')){
      if(dates.indexOf(date) == -1){
    var i = doc.dates().out('array').indexOf(date)
    var str;
    if (doc.dates().get()[i].start !== undefined){
      str = doc.dates().get()[i].start;
    }   
      var when = "";
      let m;
    const regex = /^\w*-\w*-[0-9]*/gm;
     while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
       if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
          when = match;
      });
    }
    dates.push([date,when])
      }}
      };
    
    console.log(people);
    console.log(places);
    console.log(orgs);
    var txt = text;
    for(var pers in people){
     txt = txt.replaceAll(people[pers], `<persName>${people[pers]}</persName>`)};
    for(var pl in places){txt = txt.replaceAll(places[pl], `<placeName>${places[pl]}</placeName>`)};
    for(var org in orgs){txt = txt.replaceAll(orgs[org], `<orgName>${orgs[org]}</orgName>`)};
    for(var date in dates){
        txt = txt.replaceAll(dates[date][0], `<date when="${dates[date][1]}">${dates[date][0]}</date>`)
        };

// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
       const a = document.createElement('a');
        const outfile = new Blob([txt], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = `ner_${file.files[0].name}`;
        a.click();
        URL.revokeObjectURL(a.href);
        
    };
    read.readAsText(file.files[0])
} 

