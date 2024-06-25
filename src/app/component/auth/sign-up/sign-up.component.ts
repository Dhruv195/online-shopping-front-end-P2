import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm:any;
  hiddenPassword = false;
  hiddenConfirmPassword = false;
  submitted=false;

  ngOnInit(): void {
    this.signInFormGroup();
  }

  doSignUp(){

  }
  signInFormGroup() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
      confirm_password:new FormControl(null,[Validators.required])
    })
  }

  //hidden password and show password
  showPassword() {
    this.hiddenPassword = !this.hiddenPassword;
  }
  showConfirmPassword() {
    this.hiddenConfirmPassword = !this.hiddenConfirmPassword;
  }
}
