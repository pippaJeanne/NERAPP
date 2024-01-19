---
layout: "../layouts/Main.astro"
title: "Named Entity TEI Tagger"
lang: "EN"
label: "Upload your XML-TEI file"
dates: "Include date entities"
btn: "Process file"
code: "form.cjs"
---
This is a simple web app for named entity recognition (NER) and tagging for TEI. It uses the <a href="https://github.com/spencermountain/compromise">Compromise.js</a> library for NLP (Natural Language Processing) in JavaScript. It provides recognition for basic entities such as Persons, Places and Organizations. The tagging for dates is not done by default since some projects do not need that many date tags and the algorithm may recognize even time expressions like "tomorrow" that may not be relevant for your project. An option to tell the program to include that tag is provided.

Compromise.js is trained on a set of modern languages, so the app is able to recognize entities in several languages.

This NER app is very simple to use. Just upload your XML document (check the box if you need the date tags) and click on the process button to find your output file in your downloads set folder.

***Note:*** The app does a simple pre-tagging, merely to identify as many entities as the models allow in order to facilitate the NER encoding process (only the tag is included without attributes, ex: &lt;persName&gt;William&lt;/persName&gt;, and there may be tagging mistakes if the entity is not accurately recognized). Therefore, the file might need to be revised and enriched afterwards according to your editorial protocol.