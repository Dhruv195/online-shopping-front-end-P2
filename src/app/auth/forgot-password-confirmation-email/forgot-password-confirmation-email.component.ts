import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './forgot-password-confirmation-email.component.html',
  styleUrls: ['./forgot-password-confirmation-email.component.scss']
})
export class ForgotPasswordConfirmationComponent implements OnInit {

  forgotPasswordForm: any;
  submitted = false;
  
  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.initializeForgotPasswordForm();
  }
  initializeForgotPasswordForm() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
    })
  }
  doForgotPassword() {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {
      console.log("Email ", this.forgotPasswordForm.value);

      this.authService.confirmEmail(this.forgotPasswordForm.value).subscribe({
        next: (res: any) => {
          let params = {
            'token':res.data.token
          }
          this.router.navigate(['auth/forgot-password'], {
            queryParams:params
          });
        }
      });
    }
  }
}