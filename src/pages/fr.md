---
layout: "../layouts/Main.astro"
title: "Baliseur d'entités nommées pour le TEI"
lang: "FR"
label: "Téléversez votre fichier XML-TEI"
btn: "Traiter le fichier"
code: "form.cjs"

---
Il s'agit d'une application Web simple pour la reconnaissance d'entités nommées (NER) et le balisage TEI. Elle utilise la bibliothèque <a href="https://github.com/spencermountain/compromise">Compromise.js</a> pour le TAL (traitement automatique du langage naturel) en JavaScript. Celle-ci permet de reconnaître des entités de base telles que des personnes, des lieux et des organisations.

Compromise.js est entraîné sur un ensemble de langues modernes. L'application est donc capable de reconnaître des entités dans plusieurs langues. Toutefois, le balisage de dates n'est pas inclus dans l'interface en français car les dates en français ne sont pas bien reconnues.

Ce baliseur d'entités nommées est très simple à utiliser. Téléversez tout simplement votre document XML et cliquez sur le bouton de *traiter le fichier* pour trouver votre fichier de sortie dans votre dossier de téléchargements.

***Note :*** L'application effectue un simple pré-balisage pour identifier autant d'entités que le permettent les modèles afin de faciliter le processus d'encodage d'entités nommées. C'est-à-dire seulement la balise est rajoutée dans le fichier, sans les attributs, par exemple : &lt;persName&gt;William&lt;/persName&gt. Il est également possible de retrouver quelques erreurs de balisage si l'entité n'a pas été reconnue correctement. Un processus de nettoyage et enrichissement selon votre protocole éditorial pourrait donc être nécessaire par la suite.