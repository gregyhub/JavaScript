import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfilContactComponent } from './profil-contact/profil-contact.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilContactComponent,
    AjoutContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
