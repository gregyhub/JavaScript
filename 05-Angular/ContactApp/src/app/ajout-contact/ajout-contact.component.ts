import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { ProtoContact } from '../model/contact.interface';

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() unContactEstCree = new EventEmitter();

  nouveauContact = {};
  active: boolean = true;

  submitContact() {
    this.unContactEstCree.emit({
      contactNew: this.nouveauContact
    })
    this.nouveauContact = {};
    this.active         = false;
    setTimeout( () => this.active = true, 0);
  }
  
}

