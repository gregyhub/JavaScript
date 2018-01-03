// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau de Membres
    var membres = [
        {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
        {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
        {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
        {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
    ];


    // -- Je vérifie en Direct la présence du Pseudo
    function VerifPseudo(PseudoUser) {
        let pseudoExiste = false //le pseudo n'existe pas dans al base
        for (let i = 0; i < membres.length; i++) {
           const membre = membres[i];
           if(membre.pseudo == PseudoUser) {
                $(".pseudoError").show();
                pseudoExiste = true;
                changerStatutSubmit(false);
                break;
           }
        }
        if(pseudoExiste == false) {
             $(".pseudoError").hide();
             changerStatutSubmit(true);
        }
    }

    // -- Je vérifie l'age saisie par l'utilisateur
    function VerifAge(AgeUser) {
        let ageOk = true // l'age de l'utilisateur est ok par défaut
        if(AgeUser < 18) {
            $(".ageError").show();
            ageOk = false;
            changerStatutSubmit(false);
        }
        if(ageOk == true) {
             $(".ageError").hide();
             changerStatutSubmit(true);
        }
    }

    function changerStatutSubmit() {
        //verifier ici si je dois changer en fonction du pseudo et de l'age
        
    }
 /*    function changerStatutSubmit(statut) {
        if(!statut){
            // pour désactiver le bouton submit
            $("#submit").prop('disabled', true);
        }
        else{
            $("#submit").prop('disabled', false);
        }
    } */

    


    $('#pseudo').on('input', function(e) {
       VerifPseudo($(this).val());

       //afficher dans le titre
       $('#Bienvenue').text("Bonjour " + $(this).val());
    });

    $('#age').on('change', function(e) {
        VerifAge($(this).val());
    });

    $('#registerForm').submit(function(e) {
        // -- Stopper la redirection de la page
        e.preventDefault();
        var newMembre = {
            psuedo : $('#pseudo').val(),
            age : parseInt($('#age').val()),
            email : $('#email').val(),
            mdp : $('#mdp').val()
        };
        membres.push(newMembre)

        //je masque le formulaire et affiche un tableau avec les membres
        $("#registerForm").hide();
        $('body').append('<ul>');
        for (let i = 0; i < membres.length; i++) {
            const membre = membres[i];
            $('ul').append('<li>');
            for (const key in membre) {
                if (membre.hasOwnProperty(key) && key != 'mdp') {
                    const element = membre[key];
                    $('li').eq(i).append(element + ' - ');
                }
            }
        }
        

    });
}); // fin du Ready