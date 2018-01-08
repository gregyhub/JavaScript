// importation de "Component" via @angular/cor
// pour déclarer une classe comme composant de notre application, on importe "Component" via @angular/cor
import { Component } from '@angular/core';


interface ProtoContact {
  id      : number;
  prenom  : string;
  nom     : string;
  email?   : string;
};

//je déclare qu'un tableau avec des index doit etre de format contact
interface ContactArray {
  [index:number] : ProtoContact;
}


//décorateur du composant
//permet de définir 3 paramètres essenetiels à notre App
// -- Le selecteur (selector) détermine la manière dont le composant sera affiché dans un template. On ecrira dans un notre HTML /<app-root></app-root>.
//-- templateUrl ou "template" est la partie visible du composant. c'est ce qui s'affiche à l'écran lorsque le composant est utilisé
// -- déclaration des styles avec "stylesUrls" ou "styles"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



 
// La Class contient les données du composant et aussi son comportement
// dans le contexte MVVM, notre classe correspond au ViewModel
export class AppComponent {
  title = 'ContactApp';

  //déclaration d'un objet contact
  Contact:ProtoContact = {
    id      : 1,
    prenom  : "Greg",
    nom     : "MALAUD"
  };
  //un tableau qui contient une collection de contacts;
  Contacts:ContactArray = [
   { id: 1, prenom:"Greg", nom:"MALAUD", email:"g@g.com" },
   { id: 2, prenom:"Mélanie", nom:"SCELLE" },
   { id: 3, prenom:"Jules", nom:"MONBEBE" }
  ];


  getNomComplet = (UnContact:ProtoContact) => {
    return UnContact.prenom + ' ' + UnContact.nom;
  }

  // -- choix de mon contact actif
  contactActif;

  /* choisirUnContact = function(contact:Contact) {
    this.contactActif = unContact;
  };*/
  choisirUnContact = (unContact:ProtoContact) => {
    this.contactActif = unContact;
    console.log(this.contactActif);
  }
}
