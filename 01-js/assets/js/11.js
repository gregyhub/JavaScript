/*============================================
       LE DOM
============================================*/

/*
        le DOM est une interface de développement en JS pour html.
        Graçe au DOM je vais être en mesure d'acceder / modifier mon html.
        l'Objet "document" : c'est le point d'entrée vers mon contenu HTML.
        Chaque page chargée dans mon navigateur à un objet "document".
*/

var bonjour = document.getElementById('bonjour').innerHTML;
console.log(bonjour);

// le getElementsByClassName renvoi un tableau JS avec mes éléments HTML ou autrement dit une "collection" d'élément html.
var content = document.getElementsByClassName('contenu');
console.log(content[0].innerHTML);

var tag = document.getElementsByTagName("span");

console.log(tag[1].innerHTML);

var test = document.getElementsByName('bla');
console.log(test);