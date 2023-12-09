import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuelleProjekteComponent } from './aktuelle-projekte.component';

describe('AktuelleProjekteComponent', () => {
  let component: AktuelleProjekteComponent;
  let fixture: ComponentFixture<AktuelleProjekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AktuelleProjekteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AktuelleProjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
