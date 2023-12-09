import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekteDetailliertComponent } from './projekte-detailliert.component';

describe('ProjekteDetailliertComponent', () => {
  let component: ProjekteDetailliertComponent;
  let fixture: ComponentFixture<ProjekteDetailliertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjekteDetailliertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjekteDetailliertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
