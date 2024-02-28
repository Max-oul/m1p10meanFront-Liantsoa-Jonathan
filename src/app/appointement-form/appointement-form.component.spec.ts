import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementFormComponent } from './appointement-form.component';

describe('AppointementFormComponent', () => {
  let component: AppointementFormComponent;
  let fixture: ComponentFixture<AppointementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
