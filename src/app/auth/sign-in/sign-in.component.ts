import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { TOAST_TYPE } from 'src/app/shared/constant/toast';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  hiddenPassword = false;
  signInForm: any;
  submitted = false;


  constructor(private userService:UserService ,private authService:AuthService,private router:Router,private commonService:CommonService,private cd:ChangeDetectorRef){}

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
   * SignIn form data pass in signInUser API
   */
  doSignIn() {
   this.submitted=true;
   if(this.signInForm.valid){
    this.authService.signInUser(this.signInForm.value).subscribe({
      next:(res:any)=>{
        this.authService.saveToken(res.data.token);
        this.commonService.showToastMessage(TOAST_TYPE.success,res.message)
        this.userService.activeUserDetails.next(true);
        this.router.navigate(['/home']);
        this.cd.markForCheck()
      },
      error:(res:any)=>{
        this.commonService.showToastMessage(TOAST_TYPE.danger,'Error in email and password')
      }
    })
   }
  }
  
  
  /**
   * hidden password and show password
   */
  showPass() {
    this.hiddenPassword = !this.hiddenPassword;
  }


  
}
