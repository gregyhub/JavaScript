/*============================================
        Les CONDITIONS
============================================*/

var MajoriteLegalFr = 18;
/*
* Si l'age passé en parametre est sup ou égale à l'age légal défini, alors retourn "Vrai", sinon retourne "Faux"
* @param {int} age
* @return {boollean}
*/
function VerifAge(age){
        if(age >= MajoriteLegalFr) {
               return true;
        }
        else {
                return false;
        }
}

/*
var age = parseInt(prompt("quel est ton age ?", "saisissez votre age"));
if(VerifAge(age)) {
        alert("Bienvenue");
}
else{
        alert("vous n'agez pas l'age légal, au revoir");
        window.location.replace("https://www.google.fr/search?ei=KjdCWsW6FsGwUsu_h-AL&q=age+legal+en+france&oq=age+legal+en+france&gs_l=psy-ab.3..0j0i22i30k1l9.1672.2846.0.2997.10.10.0.0.0.0.131.687.9j1.10.0....0...1c.1.64.psy-ab..0.10.684...0i131k1j0i67k1.0.GPuyWRzFdXI");
}
*/

/*====================================================================================
=================== LES OPERATEURS DE COMPARAISONS ===================================
=======================================================================================
= l'opérateur de comparaison " == " signifie : Egale à.
= Il permet de vérifier que 2 variables sont identiques.
= l'opérateur " === " signifie : strictement egale à. -> il compare la valeur et le type
= 
= opérateur " != " signifie différent de.
= opérateur " !== " signifie : strictement différent de

========================================================================================*/


//--Exercice
var email, mdp;
email   = "wf3@hl-media.fr";
mdp     = "wf3";

/* Mon Exo
var connexion = function(userMail, userMdp){
       let error="";
       let nberror = 0;
        if(userMail != email){
                error   = "votre mail n'est pas correct";
                nberror ++;
        }
        if(userMdp != mdp){
                if(nberror == 1){
                        error +=" | votre mail n'est pas correct";
                } else{
                        nberror ++;
                        error ="votre mdp n'est pas correct";
                }
        }
        if(nberror == 0){
                error=false;
        }
        return error;
};

var userMail = prompt("saisissez votre mail svp", "votre@mail.com");
var userMdp = prompt("saisissez votre mot de passe svp", "mot de passe");

msg=connexion(userMail, userMdp);
if(msg !== false){
        alert(msg);

}else{
        alert("bienvenue");
}

*/

//-- exemple de Hugo

function connexion(userMail, userMdp){
        if(userMail == email && userMdp == mdp) {
                return true;
        }else return false;
}

var userMail = prompt("saisissez votre mail svp", "votre@mail.com");
var userMdp = prompt("saisissez votre mot de passe svp", "mot de passe");
if (connexion(userMail, userMdp)){
        document.write("bienvenue");
} else alert("mail ou mdp erroné");

/*=======================================
 =========== les opérateurs Logiques
 ===========================================
 = l'opérateur ET : && ou AND.
 = l'opérateur OU : || ou OR.
 = l'opérateur "!" ou NOT. => il signifie le contaire de.
 = 
 ============================================*/