import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: any;
  submitted=false;

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
  }
}
