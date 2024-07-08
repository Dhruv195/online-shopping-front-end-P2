import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { API } from 'src/app/shared/constant/api.constant';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  providers:[DatePipe],
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit {
  profileImage: any;
  disabledEdit = true;
  submitted = false;
  editProfileForm!: FormGroup;
  userDetails!: any;
  uploadImage: any;
  defaultProfileImg: any;

  constructor(public commonService:CommonService,public userService:UserService,public datePipe:DatePipe,public cd:ChangeDetectorRef){}
  /**
   * BreadCrumb Data Set
   * initialize Profile Edit Form
   * getUserDetails API Call
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.initializeEditProfileForm();
    this.getUserDetails();
  }
  //initialize Profile Edit Form
  initializeEditProfileForm() {
    this.editProfileForm = new FormGroup({
      profilePic: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl(' '),
      dob: new FormControl(''),
      phone: new FormControl('', Validators.required),
    })
      this.editProfileForm.disable()  
  }
  //Upload Image Set ProfileImage
  submitImage(event: any) {
    var reader = new FileReader();
    reader.onload = () => {
      this.profileImage = reader.result;
    }
    this.uploadImage = event.target.files[0];
    reader.readAsDataURL(this.uploadImage);
    this.editProfileForm.get('profilePic')?.setValue(this.uploadImage);
  }
  //Edit Icon Handle to Edit Button and Input is Enable
  onEdit() {
    this.disabledEdit = !this.disabledEdit;
    if (this.disabledEdit ) {
      this.editProfileForm.disable()      
    }
    else {
      this.editProfileForm.enable()
    }
    
  }
  //BreadCrumbData set
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Edit Profile', link: '/edit-profile' },
      ],
    });
  }
  //Handle Edit Profile Submit Data in FormData
  onEditProfileSubmit() {
    this.submitted = true;
    if (this.editProfileForm.valid) {
      let formData = new FormData();
      formData.append('firstName', this.editProfileForm.get('firstName')?.value);
      formData.append('lastName', this.editProfileForm.get('lastName')?.value);
      formData.append('phone', (this.editProfileForm.get('phone')?.value));
      if (this.uploadImage) {
        formData.append('profilePic',  this.uploadImage);
      }
      if (this.editProfileForm.get('gender')?.value) {
        formData.append('gender', this.editProfileForm.get('gender')?.value);
      }
      if ((this.editProfileForm.get('dob')?.value)) {
        formData.append('dob', (this.editProfileForm.get('dob')?.value));
      }
      
      this.userService.updateUser(formData).subscribe({
        next:(res:any)=>{
          this.onEdit();
          // this.userService.updateUserDetails$.next(true);
          // this.userService.userDetails$.next(res.data);
          
          this.cd.markForCheck()
        },
        error: (res: any) => {
          
        }
      })
    }
  }

  getUserDetails(){
   

    this.userService.userDetails$.subscribe({
      next:(res:any)=>{
        this.handleUserProfileData(res);
        this.cd.markForCheck();

      }
    })
  }

  handleUserProfileData(res: any) {
    this.userDetails = res;
        this.defaultProfileImg=API.USER_NAME_PROFILE_IMG+`${this.userDetails?.firstName}+${this.userDetails?.lastName}`
        this.userDetails.dob=this.datePipe.transform (this.userDetails.dob,'YYYY-MM-dd')
        this.editProfileForm.patchValue({
          firstName:this.userDetails.firstName,
          lastName:this.userDetails.lastName,
          gender: this.userDetails.gender,
          dob: this.userDetails.dob,
          phone: this.userDetails.phone,
        });
        this.profileImage = this.userDetails.profilePic;
  }
}
