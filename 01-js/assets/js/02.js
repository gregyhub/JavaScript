//---- Déclarer un tableau indexé
var tab = [];
var tab = ['hamid', 'greg', 'test'];
console.log(tab);

var myArray = new Array;

console.log(myArray);
tab[0]  = "marie-pierre";
tab[2]  = "olivier";
tab[3]  = "pouette";
console.log(tab);

//----- Déclarer et Affecter des valeurs à un Objet
var coordonnees={
    prenom  :"hugo",
    nom     :"liegeard",
    age     :28
};

console.log(coordonnees);
console.log(typeof coordonnees);

// Création de 2 tab indexés
var listePrenoms=["hugo","marie-pierre","lounis","romain"];
var listeNoms   =["LIEGEARD","DUPOUX","DGADEN","ELIE"];

var Annuaire    =[listePrenoms,listeNoms];
console.log(Annuaire);
//pour affichier Hugo LIEGEARD
console.log('--------');
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

//exo
var listePrenoms = ["olivier","greg","hamid"];
var listeNoms=["charpentier","malaud","kezzal"];
var listeAges=["37","34","41"]
var AnnuaireDesStagiaires =[listePrenoms, listeNoms, listeAges ];

console.log(AnnuaireDesStagiaires);

var AnnuaireDesStagiaires = [
    { prenom : "Greg", nom : "mal", tel : "0600000"},
    { prenom : "Greg", nom : "mal", tel : "0600000"},
    { prenom : "Greg", nom : "mal", tel : "0600000"},
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1]['nom']);
console.log(AnnuaireDesStagiaires[1].prenom);

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);


/*------------------------------------------------------
    AJOUTER UN ELEMENT
---------------------------------------------------------*/    
var couleur = ["rouge","jaune","vert"];
console.log(couleur);
var NbElementDeMonTab = couleur.push("orange");
console.log(couleur);
console.log(NbElementDeMonTab);

//la fonction push() pour ajouter un élément au tableau
//et permet de récupérer le nb d'élément du tableau

//la fonction unshift() idem mais ajoute au début du tableau

/*==============================================
    Recupérer et sortir le dernier element
================================================*/
var monDernierElement = couleur.pop();
console.log(couleur);
console.log(monDernierElement);
// idem avec shift avec le premier élément
// la fonction splice () permet de faire sortir
// un ou plusieurs éléments de votre tableau
