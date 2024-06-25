import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hiddenPassword = false;
  signInForm: any;
  submitted = false;


  constructor(public authService:AuthService,public router:Router,public commonService:CommonService,private cd:ChangeDetectorRef){}

  /**
   * login FormGroup initialize
   */
  ngOnInit(): void {
    this.signInFormGroup();
  }

  signInFormGroup() {
    this.signInForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required])
    })
  }

  /**
   * login API to pass formData and get the response and push sub1 in subscribed array for delete in memory
   */
  doSignIn() {
   
  }

  //hidden password and show password
  showPass() {
    this.hiddenPassword = !this.hiddenPassword;
  }
}
