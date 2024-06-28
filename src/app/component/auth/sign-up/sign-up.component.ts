import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

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
  submitted = false;
  
  constructor(public commonService:CommonService){}

  ngOnInit(): void {
    this.signInFormGroup();
  }

  doSignUp(){
    console.log("sign up", this.signUpForm);
    this.commonService.userSingUp(this.signUpForm.value).subscribe({
      next: (res: any) => {
        console.log('Sign Res ',res)
      },
      error: (err: any) => {
        console.log("Error ",err)
      }
    })
  }
  signInFormGroup() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
      firstName: new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required)
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
