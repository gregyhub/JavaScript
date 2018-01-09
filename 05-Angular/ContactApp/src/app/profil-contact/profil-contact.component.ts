import { Component,Input, OnInit } from '@angular/core';
import { ProtoContact } from '../model/contact.interface';

@Component({
  selector: 'app-profil-contact',
  templateUrl: './profil-contact.component.html',
  styleUrls: ['./profil-contact.component.css']
})
export class ProfilContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //le input permet de passer en parametre un élément du parent (app.component.ts) à l'enfant (profil-contact?component.ts)
  @Input() contact:ProtoContact;

  getNomComplet = (UnContact:ProtoContact) => {
    return UnContact.prenom + ' ' + UnContact.nom;
  }


}
