import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AktuelleProjekteComponent } from './aktuelle-projekte/aktuelle-projekte.component';
import { ProjekteDetailliertComponent } from './projekte-detailliert/projekte-detailliert.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { MeineSkillsComponent } from './meine-skills/meine-skills.component';

const routes: Routes = [
  { path: 'start', component: StartseiteComponent },
  { path: 'aktuelle-projekte', component: AktuelleProjekteComponent },
  { path: 'meine-skills', component: MeineSkillsComponent },
  { path: 'projekte-detailliert', component: ProjekteDetailliertComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
