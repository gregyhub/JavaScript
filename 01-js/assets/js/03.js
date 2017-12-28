/*=============================================================
                LA CONCATENATION
================================================================*/

var debutDePhrase        = "aujourd'hui";
var laDate               = new Date();
var suiteDePhrase        = ", sont présents :";
var nombreDeStagiaires   = 18;
var finDePhrase          = "stagiaires.<br />";

var phrase = debutDePhrase +" "+ laDate.getDate() +"/"+ (laDate.getMonth()+1)+"/"+ laDate.getFullYear()  +" "+ suiteDePhrase +" "+ nombreDeStagiaires +" "+ finDePhrase;
console.log(phrase);
document.write(phrase);

var phrase1 = "je m'appelle"
var phrase2 = "Hugo et j'ai"
var age = 28;
var phrase3 = "ans !";

document.write(phrase1 + ' ' + phrase2 + ' ' + age + ' ' + phrase3);