import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileImage: any;
  disabledEdit = true;
  submitted = false;
  editProfileForm!: FormGroup;
  userDetails:any;

  constructor(public commonService:CommonService,public userService:UserService){}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.initializeEditProfileForm();
    this.getUserDetails();
  }
  initializeEditProfileForm() {
    this.editProfileForm = new FormGroup({
      profilePic: new FormControl('',Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email:new FormControl('',Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
      this.editProfileForm.disable()  
  }
  submitImage(event: any) {
    var reader = new FileReader();

    reader.onload = () => {
      this.profileImage = reader.result;
    }
    
    reader.readAsDataURL(event.target.files[0]);
  }
  onEdit() {
    this.disabledEdit = !this.disabledEdit;
    if (this.disabledEdit ) {
      this.editProfileForm.disable()      
    }
    else {
      this.editProfileForm.enable()
    }
    
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Edit Profile', link: '/edit-profile' },
      ],
    });
  }
  onEditProfileSubmit() {
    this.submitted = true;
    if(this.editProfileForm.valid){
      let updateUserDetails={
        profilePic:this.editProfileForm.value.profilePic,
        firstName: this.editProfileForm.value.firstName,
        lastName: this.editProfileForm.value.lastName,
        // dob:this.editProfileForm.value.dob,
        gender: this.editProfileForm.value.gender,
        phone:Number (this.editProfileForm.value.phone),
      };
      console.log("updated ",updateUserDetails)
      this.userService.updateUser(updateUserDetails).subscribe({
        next:(res:any)=>{
          console.log("Res ",res);
          this.profileImage=res.proifilePic;
          this.onEdit();
        }
      })
    }
  }

  getUserDetails(){
    this.userService.getUser().subscribe({
      next:(res:any)=>{
        this.userDetails=res.data;
        this.editProfileForm.patchValue(this.userDetails);
      }
    })
  }
}
