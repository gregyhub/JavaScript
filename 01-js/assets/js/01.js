/* alert("salut");
alert("salut2");
 */

 var Prenom="test";
 Prenom="greg";
 console.log(Prenom);

 /*======================================
 |          LES TYPES de variables      |
 ======================================*/
//typeof permet de définir le type de la varialbe
// string = chaine de charactère
console.log(typeof Prenom);

var  Age = 22;
console.log(Age);
console.log(typeof Age);

 /*======================================
 |         LA PORTEE des variables      |
 | Les variables déclarées directement  |
 | à la racine du fichier sont appelées |
 | variables "GLOBAL".                  |
 | elles sont disponible dnas l'ensemble|
 | de votre document, y compris dans les|
 | fonctions ou boucles.
 | par contre les variables déclarées 
 | à l'interieur d'une fonction sont 
 | appelées variables "LOCAL"
 ======================================*/

 // Les variables de type FLOAT
 var uneDecimal = -2.984;
 console.log(uneDecimal);
 console.log(typeof uneDecimal);

  var unBool = false; //true;
  console.log(unBool);
  console.log(typeof unBool);

 
 /*======================================
 |          LES CONSTANTES              |
 | la déclaration CONST permet de créer
 | une constante accessible uniquement 
 | en lecture.
 | par convention elles sont écrite en 
 | MAJUSCULES
 ======================================*/
const HOST = "localhost";
const USER = "root";
const PASW = "mysql";
console.log('-----');

 /*======================================
 |         LA MINUTE INFO              |
 | 
 | au fur et a mesure que l'on affecte 
 | ou ré-affecte des valeurs à une 
 | variable, celle-ci prend la nouvelle 
 | valeur et le nouveau type
 | en JS ou Ecma Script, elles sont
 | auto-typées.
 | pour convertir le type d'une variable
 | je peux utiliser les fonctions native
 |de JS.
 ======================================*/

 var unNombre = "34";
 console.log(unNombre);
 console.log(typeof unNombre);
 unNombre = parseInt(unNombre);
 console.log(typeof unNombre);

 console.log('----- test----');
 var test=34;
 console.log(typeof test);
 test="45"
 console.log(typeof test);
 var test=55;
 console.log(typeof test);
 var test=55.6;
 console.log(typeof test);
//pour transformer en string
 console.log(test.toString());