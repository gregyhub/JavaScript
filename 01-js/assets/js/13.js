/*============================================
       Les Evenements en JS
============================================*/

/*
        Ils vont permettre de déclencher une fonction, c'est à dire : une série d'instruction suite à une action de mon utilisateur.

        OBJECTIF : etre en mesure de capturer ces evenements afin d'executer une fonction.
*/

/* les Event : MOUSE (souris)
       - click      : au clic sur un élement
       - mouseenter : la souris passe au dessus de la zone qu'occupe un élément
       - mouseleave : la souris sors de cette zone

 Les Event : KEYBOARD
        - keydown : une touche est enfoncé
        - keyup   : une touche est relachée

 Les Event : WINDOW
        - scroll : défilement de la fenetre
        - resize : redimensionnement de la fenetre

 Les Event : FORM
        - change : pour les éléments <input>, <select> et <textarea>
        - submit : envoie du formulaire
        - input  : pour capter la saisie sur un champ input

===============================================
=========== Les Ecouteurs d'évenements=========
        pour Attacher un évenement à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :


*/

var p = document.getElementById('MonParagraphe');
// faire en sorte que le paragraphe devienne rouge au clic
function changeColor(){
        p.style.color="red";
}
p.addEventListener("click", changeColor);

var champ = document.createElement("input");
champ.id  = "champs";
champ.type = "text";
//idem à input.setAttribute('type','text');

document.body.appendChild(champ);


function afficheSaisie(){
        alert(champ.value);
}
champ.addEventListener("change", afficheSaisie);