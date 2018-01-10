// -- Initialisation de jQuery (DOM READY)
$(function() {

   //déclaration des variables
    var selectionChat    = $("#selectionChat");
    var raison           = $("#raison");
    var AdpotForm        =  $("#AdpotForm");

    //event à la soumission du formulaire
    AdpotForm.submit(function(e) {
        e.preventDefault();
        // -- Vérification de chaque champ -- //
        if(selectionChat.val() === null) {
            selectionChat.parent().addClass('has-error');
        }
        if(raison.val().length < 15) {
            raison.parent().addClass('has-error');
        }
        if(AdpotForm.find('.has-error').length === 0) {
            // si je n'ai pas d'erreur dans le formulaire
            AdpotForm.replaceWith('<div class="alert alert-success">Vous souhaitez adopter <strong>' + selectionChat.val() +'</strong>. \nNous allons traiter votre demande.');
        }
    });


    //event au changement du champ "SELECT" pour supprimer la bordure rouge
    selectionChat.on("input", function(e) {
        selectionChat.parent().removeClass('has-error');
    });
    //event au changement du champ "TEXTAREA" pour supprimer la bordure rouge
    raison.on("input", function(e) {
        raison.parent().removeClass('has-error');
    });


}); // fin du Ready