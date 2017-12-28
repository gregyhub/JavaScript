/*============================================
        Les FONCTIONS
============================================*/

//déclaration d'une fonction sans retour de valeur
function ditBonjour(){
        alert("Bonjour");
}
//appel de la fonction
//ditBonjour();


//fonction avec appel de parametres
function Bonjour(Prenom, Nom){
        document.write("<p>Bonjour <strong>" + Prenom + " " + Nom +"</strong> !</p>");
}
Bonjour("Greg","MALAUD");


//fonction avec appel de parametres + retour de valeur
function Add(nb1,nb2){
        var resultat = nb1 + nb2;
        return(resultat);
}
var test = Add(10,15);
console.log(test);