import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidErrorsComponent } from './valid-errors.component';

describe('ValidErrorsComponent', () => {
  let component: ValidErrorsComponent;
  let fixture: ComponentFixture<ValidErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
