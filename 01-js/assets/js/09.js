/*============================================
        Les Boucles
============================================*/

//-- FOR

for(let i = 1; i <= 10 ; i++){
        document.write("<p>Instruction executée : <strong> i = " + i + "</strong></p>");
}

document.write('<hr />');

var j =1;
while(j <= 10){
        document.write("<p>Instruction executée : <strong> j = " + j + "</strong></p>");
        j++;
}

//-- exercice
var prenoms = ['jean', 'Marc', 'Mathieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];

for(let i = 0; i < 7 ; i++)
{
        document.write('<p style="color:blue;">'  + prenoms[i] + "</p>");
}
//cette 2eme écriture
for(let i = 0; i < prenoms.length ; i++)
{
        document.write('<p style="color:green;">' + prenoms[i] + "</p>");
}
var h = 0;
while(prenoms[h])
{
        document.write('<p style="color:red;">' + prenoms[h] + "</p>");
        h++;
}

//-- idem avec forEach (attention à la perf !!!)
prenoms.forEach(affichePrenoms);
function affichePrenoms(prenoms){
        document.write('<p style="background:yellow;">' + prenoms + "</p>");
}