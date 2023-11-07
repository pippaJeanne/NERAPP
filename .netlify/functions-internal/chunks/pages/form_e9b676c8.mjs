import { load } from 'spacy';

//const form = document.querySelector('form');
//form.addEventListener('submit', handleSubmit)


(async function() {
    const nlp = load('xx_ent_wiki_sm');
    const doc = await nlp(txtdata);
    for (let ent of doc.ents) {
        console.log(ent.text, ent.label);
    }
   /* for (let token of doc) {
        console.log(token.text, token.pos, token.head.text);
    }*/
 })();

     
        
/*
// based on: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
      /*  const a = document.createElement('a');
        const outfile = new Blob([text], { type: 'text/xml' });
        //console.log(outfile);
        a.href = URL.createObjectURL(outfile);
        a.download = `ner_${file.files[0].name}`;
        a.click();
        URL.revokeObjectURL(a.href);
        */ /*
    };
    read.readAsText(file.files[0])
} 
*/
