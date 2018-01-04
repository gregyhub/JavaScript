// -- Initialisation de jQuery (DOM READY)
$(function() {

    /**
     * Validate email function with regualr expression
     * 
     * https://paulund.co.uk/regular-expression-to-validate-email-address
     * If email isn't valid then return false
     * 
     * @param email
     * @return Boolean
     */
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    function validateTel(tel){ 
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        var valid = telReg.test(tel);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }


    //event 
    $("#contact").submit(function(e) {
        e.preventDefault();

        //supprimer les différentes erreurs
        $("#contact .has-error").removeClass('has-error');
        $('#contact .text-danger').remove();
        //déclaration des variables
        var nom     = $("#nom");
        var prenom     = $("#prenom");
        var email     = $("#email");
        var tel     = $("#tel");

        // -- Vérification de chaque champ -- //
        if(nom.val().length === 0) {
            nom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
        }
        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prenom</p>').appendTo(prenom.parent());
        }
        
        if(!validateEmail(email.val())) {
            email.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir un email valide</p>').appendTo(email.parent());
        }
        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre tel</p>').appendTo(tel.parent());
        }

        if($('#contact').find('.has-error').length === 0) {
           $('#contact').replaceWith('<div class="alert alert-success">Votre demande a bien été prise en compte !');
        }
        else{
           $('#contact').prepend('<div class="alert alert-danger">Votre demande n\'a pas été envoyé !');
        }
    });

}); // fin du Ready