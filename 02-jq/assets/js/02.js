/*===================================================
============ Les Sélecteurs en JQ ===================
=====================================================


*/


$(function(){
    //dom ready

    function l(e){
        console.log(e);
    }

    //sélectionn les balise SPAN de la page
    l(document.getElementsByTagName('span'));
    l($('span'));

    //sélection de Menu
    l(document.getElementById('menu'));
    l($('#menu'));

    //sélection d'une classe
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    //sélectioner un Attribut
    l($('[href="https://www.google.fr"]'));
});