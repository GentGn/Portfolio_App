import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-aktuelle-projekte',
 templateUrl: './aktuelle-projekte.component.html',
 styleUrls: ['./aktuelle-projekte.component.css']
})
export class AktuelleProjekteComponent {
 constructor(private router: Router) { }

 navigateToProjekteDetailliert(): void {
  this.router.navigate(['/projekte-detailliert']);
}
}