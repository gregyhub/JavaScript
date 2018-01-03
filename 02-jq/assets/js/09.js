// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];
    $('.aucuncontact').show();
    if(localStorage.getItem("Repertoire")) {
        CollectionDeContacts = JSON.parse(localStorage.getItem("Repertoire"));
        $(".aucuncontact").hide();
        //fonction appellée si refresh de la page
        for (let i = 0; i < CollectionDeContacts.length; i++) {
            const UnContact = CollectionDeContacts[i];
            const indexEnCour = CollectionDeContacts.indexOf(UnContact);            
            creerligneTableauContact(UnContact, indexEnCour);
        }
    }

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

   

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {
        CollectionDeContacts.push(UnContact);
        //l'index du tableau où l'élément est enregistré :
        var indexEnCour = CollectionDeContacts.indexOf(UnContact);
        sauverEnLocal();
        
        creerligneTableauContact(UnContact, indexEnCour);
    }
    
    function sauverEnLocal() {
        window.localStorage.setItem("Repertoire", JSON.stringify(CollectionDeContacts));
    }


    function creerligneTableauContact(UnContact, indexEnCour) {
        //je met à jours le tableau html
        $("tbody").append("<tr id='index"+ indexEnCour +"'>");
        $("#index"+indexEnCour).append("<td>" + UnContact.nom).append("<td>" + UnContact.prenom).append("<td>" + UnContact.email).append("<td>" + UnContact.tel).append('<td><a id="index'+indexEnCour+'" href="#">Supprimer</a></td>');
    }
    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire(resetInput) {
        //je selectionne mes input
        // --> $('#contact').get(0).reset();
        for(let i = 0 ; i < resetInput.length ; i++) {
            resetInput[i].value = '';
            $(resetInput[i]).css('background','white').css('color','black');
        }
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $('.alert').toggle('slow').delay(3000).toggle("slow");
    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {
        //je parcours la collection
        for(let i = 0 ; i < CollectionDeContacts.length ; i++) {

            //pour chaque contact je vérifie le mail
            if(CollectionDeContacts[i].email == UnEmail)
            {             
                return true;
                break;
            }
        }
        //si je sors du for, c'est que le mail n'est pas présent dans le répertorie, donc je peux l'ajouter
        $(".aucuncontact").hide();
        return false;
    }


    $('a').on('click', function(e) {
        e.preventDefault();
        //je récupère l'index du contact à supprimer
        indexASupp = this.id.substring(5)
        //je le supprime de la collection
        CollectionDeContacts.splice(indexASupp,1);
        sauverEnLocal();
        //maintenant je met à jours le tableau HTML
        indexASupp = "index"+indexASupp;
        $('#'+indexASupp).remove();
        if(CollectionDeContacts.length==0){
            $(".aucuncontact").show();
            storage.removeItem("Repertoire");
        }
    });
    

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
        var contact = {};
        var alertError = ''; // false si pas d'erreur, sinon j'ai un message d'arlerte dans la variable
        var valideMail;
        for(i = 0 ; i < inputCheck.length ; i++){
            let champ = inputCheck[i];
            if( $(champ).val().length == 0){
                //un champ input est vide.
                $(champ).css('background','red').css('color','white');
                alertError += 'Attention : vous devez saisir le champ - ' + champ.name + ' - pour valider le formulaire ! \n';
            }
            else{
                //je vérifie que le champ mail est bien un mail 
                if(champ.name=='email') {
                    valideMail = validateEmail(champ.value);
                     //si le réponse est FALSE, j'affiche un message d'erreur
                    if(valideMail==false){
                        alertError+='Attention : vous devez saisir un email valide';
                    }
                }
                //j'ajoute l'information dans un tableau contact
                contact[champ.name]=champ.value;
            }
        } // fin du For

        // -- Si mesInformationsSontValides Alors alertError = si pas de chaine de caractere
        if(alertError.length == 0 ){
            if(!estCeQunContactEstPresent(contact.email)){
                //si contact n'existe pas dans la collection 
                //j'ajoute le contact dans le Collection / dans le tableau HTML 
                ajouterContact(contact);
                // puis je vide le formulaire
                reinitialisationDuFormulaire(inputCheck);
                // puis j'affiche une popUp
                afficheUneNotification();
            }
            else{
                //un contact existe déjà avec ce mail
                alert("ATTENTION : ce contact existe déjà dans votre répertoir !")
            }
        }
        // -- Sinon...
        //si j'ai au moins une erreur j'affiche un message pour qu'il le saissise
        else{
            alert(alertError);
        }

    }); //fin du formulaire

}); // -- Fin de jQuery READY !