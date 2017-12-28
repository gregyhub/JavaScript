/*===================================================
============ LE CHAINAGE DE METHODE AVEC JQ==========
=====================================================


*/
$(function(){

    console.log($('div'));
    $('div').hide(5000,function() {
        //une fonction peut etre défini qui se déclenchera à la fin de l'animation.
        //La fonction s'executera pour chaque élément ciblé.
       // alert('fin du hide');    

        $("div").css('background','yellow');
        $("div").css('color','red');
        $("div").show('slow');

    });


    $("p").hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
    $("p").hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

});