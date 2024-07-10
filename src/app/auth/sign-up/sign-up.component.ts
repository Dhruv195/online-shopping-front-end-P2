import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { emailValidation } from 'src/app/shared/validation/customeValidation.constant';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  signUpForm: any;
  hiddenPassword = false;
  hiddenConfirmPassword = false;
  submitted = false;

  constructor(
    public authService: AuthService,
    public route: Router,
    public commonService: CommonService,
    public userService:UserService,
    public cd:ChangeDetectorRef
  ) {}
  /**
   * sign Up form Initialize
   */
  ngOnInit(): void {
    this.signInFormGroup();
  }

  /**
   * sign up form 
   */
  signInFormGroup() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, emailValidation()]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  /**
   * hidden password and show password
   */
  showPassword() {
    this.hiddenPassword = !this.hiddenPassword;
  }
  showConfirmPassword() {
    this.hiddenConfirmPassword = !this.hiddenConfirmPassword;
  }

  /**
   * submit on SignUp to call Sign API
   * activeUserDetails behavior subject to pass true to active
   */
  doSignUp() {
    this.submitted = true;
    this.authService.signUpUser(this.signUpForm.value).subscribe({
      next:(res:any)=>{
        if(res){
          this.authService.saveToken(res.data.token);
          this.userService.activeUserDetails.next(true);
          this.route.navigate(['home/']);
          this.cd.markForCheck();
        }
      },
      error: (err) => {},
    });
  }
}
