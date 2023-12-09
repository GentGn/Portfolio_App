import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineSkillsComponent } from './meine-skills.component';

describe('MeineSkillsComponent', () => {
  let component: MeineSkillsComponent;
  let fixture: ComponentFixture<MeineSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeineSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeineSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
