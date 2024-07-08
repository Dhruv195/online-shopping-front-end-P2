import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { TOAST_TYPE } from 'src/app/shared/constant/toast';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any;
  hiddenPassword = false;
  submitted = false;
  hiddenConfirmPassword = false;
  token: any;

  constructor(private activatedRoute:ActivatedRoute,private authService:AuthService,private commonService:CommonService,private router:Router){}

  ngOnInit(): void {
    this.initializeForgotPasswordForm();
    this.getParams()
  }
  getParams() {
    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      this.token = params.params.token;
    })
  }
  initializeForgotPasswordForm() {
    this.forgotPasswordForm = new FormGroup({
      password: new FormControl('',Validators.required),
      confirmPassword:new FormControl('',Validators.required)
    })
  }
  //hidden password and show password
  showPassword() {
    this.hiddenPassword = !this.hiddenPassword;
  }
  showConfirmPassword() {
    this.hiddenConfirmPassword = !this.hiddenConfirmPassword;
  }
  doForgotPassword() {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {
      this.authService.forgotPassword(this.forgotPasswordForm.value, this.token).subscribe({
        next: (res: any) => {
        this.commonService.showToastMessage(TOAST_TYPE.success,'Changed Password Successfully')
          this.router.navigate(['auth/sign-in']);
        }
      })
    }
  }
}
