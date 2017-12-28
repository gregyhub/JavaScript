/*============================================
       La manipulation des contenus
============================================*/

function l(e){
        console.log(e);
}

var google = document.getElementById("google");
// A - acceder au lien
l(google.href);

// B - Id 
l(google.id);

// C - class
l(google.className);

// D - text
l(google.textContent);

// Modifier le contenu du lien "mon lien vers google"
l(google.className);
google.textContent="mon lien";
google.className= 'test';


/*============================================
       Ajouter un elemenet dans la page
============================================*/

/*// avec 2 methodes
// 1. la fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais par le suite modifier avec les méthodes que nous venons de voir.
//Ps : ce nouvel élément est placé en mémoire.
*/

//definition de l'élément
var span = document.createElement('span');
//lui donner un ID
span.id = "MonSpan";
//lui donner du contenu
span.textContent = "mon texte en JS";
//comment l'ajouter dans la page
        //la fonction appendChild permet de rajouter un enfant à un élément du DOM.
google.appendChild(span);


/* Exercice 
En partant du travail déjà réaliser sur la page.
Créez directement dans la page une balise h1 ayant comme contenu "Titre de mon article"
dans cette balise vous creer un lien vers une url + lien rouge et non souligné
*/

var titre = document.createElement("h1");
var lien = document.createElement("a");

lien.textContent="Titre de mon Article";
lien.href="http://fr.lmgtfy.com/";
lien.style="color:red; text-decoration:none;";
lien.style.color="blue";
lien.style.textDecoration = "none l'élément";

titre.appendChild(lien);

/* var body = document.getElementsByTagName('body');
 */
document.body.appendChild(titre);


