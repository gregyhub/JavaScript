/*===================================================
============ LE CHAINAGE DE METHODE AVEC JQ==========
=====================================================





*/

$(() => {
    // flemards
    function l(e){
        console.log(e);
    }

    // sélection des divs
    l($('div'));

    // sélection du menu
    l($('nav'));

    // les enfants qui sont dans le menu
    l($('nav').children());

    //uniquement les UL des enfants
    l($('nav').children('ul'));
    //uniquement les LI des enfants
    l($('nav').children('ul').find('li'));
    //uniquement le 2eme element des LI 
    l($('nav').children('ul').find('li').eq(1));

    //connaitre le voisin immédiat de mon menu
    l($('nav').next());
    l($('nav').next().next()); // le voisin du voisin
    l($('nav').prev());

    //les parents
    l($('nav').parent());

});