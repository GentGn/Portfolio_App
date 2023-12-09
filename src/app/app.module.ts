import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { AktuelleProjekteComponent } from './aktuelle-projekte/aktuelle-projekte.component';
import { MeineSkillsComponent } from './meine-skills/meine-skills.component';
import { ProjekteDetailliertComponent } from './projekte-detailliert/projekte-detailliert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartseiteComponent,
    AktuelleProjekteComponent,
    MeineSkillsComponent,
    ProjekteDetailliertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
