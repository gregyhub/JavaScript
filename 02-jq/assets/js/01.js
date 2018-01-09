/*===================================================
============ LA DISPONIBILITE DU DOM=================
=====================================================

    a partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence de ma page est complétement chargé, je peux commencer à utiliser JQUERY

    Je vais mettre l'ensemble de mon code dans une fonction, elle sera appelé AUTOMATIQUEMENT par JQ lorsque le DOM sera entièrement défini.

    3 façon de faire
*/
    
// 1 :
jQuery(document).ready(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// 2 : $ = JQuery
$(document).ready(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// 3 : 
$(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
   // alert("test");

    //en JS
    document.getElementById("TexteEnJQuery").innerHTML = "<strong>mon Text en JS</strong>";

    //en JQ
    $('#TexteEnJQuery').html('<strong style="color:red;"> et mon text en JQ</strong>');
});
