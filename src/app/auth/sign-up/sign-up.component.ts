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

  ngOnInit(): void {
    this.signInFormGroup();
  }

  doSignUp() {
    this.submitted = true;
    console.log('Res ', this.signUpForm.value);
    this.authService.signUpUser(this.signUpForm.value).subscribe({
      next:(res:any)=>{
        if(res){
          this.authService.saveToken(res.data.token)
          this.route.navigate(['home/']);
          this.userService.updateUserDetails$.next(true);
          this.cd.markForCheck();
        }
      },
      error: (err) => {},
    });
  }
  signInFormGroup() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  //hidden password and show password
  showPassword() {
    this.hiddenPassword = !this.hiddenPassword;
  }
  showConfirmPassword() {
    this.hiddenConfirmPassword = !this.hiddenConfirmPassword;
  }
}
