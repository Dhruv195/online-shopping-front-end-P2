import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { TOAST_TYPE } from 'src/app/shared/constant/toast';
const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.newPassword === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: any;
  submitted = false;
  constructor(public commonService:CommonService,private authService:AuthService){}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.initializeChangePasswordForm();
  }
  changeBreadCrumbData() {

    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' }, 
        { label: 'Change Password', link: '/change-password' },
      ],
    });
  }
  initializeChangePasswordForm() {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  onSubmitChangePassword() {
    this.submitted = true;
    if (this.changePasswordForm.valid) {
      this.authService.changePassword(this.changePasswordForm.value).subscribe({
        next: (res: any) => {
          this.commonService.showToastMessage(TOAST_TYPE.success,'Password Change Successfully')
          this.changePasswordForm.reset();
          this.submitted=false;
        },
        error: (err: any) => {  
          this.commonService.showToastMessage(TOAST_TYPE.danger,'Old Password is InCorrect')
          
        }
      })
    }
  }
}
