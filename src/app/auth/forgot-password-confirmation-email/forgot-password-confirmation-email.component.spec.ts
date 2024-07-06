import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordConfirmationComponent } from './forgot-password-confirmation-email.component';

describe('ForgotPasswordConfirmationComponent', () => {
  let component: ForgotPasswordConfirmationComponent;
  let fixture: ComponentFixture<ForgotPasswordConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForgotPasswordConfirmationComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
