// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {}

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {
        if(CollectionDeContacts.length == 0 ) {
           //mon tableau est vide donc je peux ajouter le 1er contact
          return false;
        }
    }

    function infoValide(info) {
        infoOK = true;
        if(info.length == 0) {
            infoOK = false;
        }
    }

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier si vide
        var inputCheck = $('input');
        var contact = [];
        var nbError = 0;


        for(i = 0 ; i < inputCheck.length ; i++){
            let champ = inputCheck[i];
            console.log(champ.name);
            if( $(champ).val().length == 0){
                //un champ input est vide.
                nbError += 1;
                inputCheck.css('background','red').css('color','white');
            }
            else{
                //j'ajoute l'information dans un tableau contact
                contact.push(champ);
            }
        }
       console.log(contact);
        // -- Si mesInformationsSontValides Alors nbError = 0
        if(nbError == 0 ){
            //je récupère l'adresse mail
            let mail = $('input[name="email"]').val();
            if(!estCeQunContactEstPresent(mail)){
                ajouterContact(contact);
            }
        }
        // -- Sinon...
        //si j'ai au moins une erreur j'affiche un message pour qu'il le saissise
        else{
            alert("ATTENTION ! vous devez saisir vous les champs du formulaire")
        }

        
      

    });

}); // -- Fin de jQuery READY !