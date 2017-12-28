/*============================================
       Exo 2
============================================*/
/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

 II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/


var PremierTrimestre = [
        {
                Prenom      : "Hugo",
                Nom         : "LIEGEARD",
                Notes : {
                                Francais        : 12,
                                Math            : 19,
                                Physique        : 4,
                                Anglais         : 15,
                                Dev             : 9        
                        }
        },
        {
                Prenom      : "Grégoire",
                Nom         : "MALAUD",
                Notes : {
                                Francais        : 11,
                                Math            : 12,
                                Physique        : 14,
                                Anglais         : 19,
                                Dev             : 15        
                        },
        },
        {
                Prenom      : "Christian",
                Nom         : "NHAN",
                Notes : {
                                Francais        : 13,
                                Math            : 5,
                                Physique        : 7,
                                Anglais         : 15,
                                Dev             : 8,
                                Sport           : 12,     
                        },
        },
        {
                Prenom      : "Ella",
                Nom         : "TSONDE",
                Notes : {
                                Francais        : 8,
                                Math            : 15,
                                Physique        : 16,
                                Anglais         : 16,
                                Dev             : 18        
                        },
        },
        {
                Prenom      : "Olivier",
                Nom         : "CHARPENTIER",
                Notes : {
                                Francais        : 16,
                                Math            : 15,
                                Physique        : 10,
                                Anglais         : 11,
                                Dev             : 12,
                                Meca            : 15          
                        }
                
        }
]


var afficheMoyenne = function() {
        console.log(PremierTrimestre);
        document.write('<ul>');
        for( i = 0 ; i < PremierTrimestre.length ; i++ )
        {       // j'affiche d'abord un <li> avec l'étudient.
                document.write('<li>' + PremierTrimestre[i].Prenom + ' ' + PremierTrimestre[i].Nom );
                document.write('<ul>');
                // puis pour chaque étudient la liste des notes par matière
                // en plus je vais calculer la moyenne générale avec une nouvelle variable
                var MoyenneG, nbNotes;
                MoyenneG        = 0;
                nbNotes         = 0;
                for(var key in PremierTrimestre[i].Notes)
                {
                        var value = PremierTrimestre[i].Notes[key];
                        document.write('<li>' + key +' : ' + value + '</li>' );
                        MoyenneG += value;
                        nbNotes++;
                }
                //je termine de calculer la moyenne général en divisant par le nombre de note et je l'affiche
                MoyenneG /= nbNotes ;
                document.write('<li style="color:red">' + MoyenneG.toFixed(2) + '</li></ul></li>');
        }
        document.write('</ul>');
};

afficheMoyenne();



