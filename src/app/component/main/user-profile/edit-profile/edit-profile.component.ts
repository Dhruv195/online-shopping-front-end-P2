import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  eventImage: any;
  disabledEdit = true;
  submitted = false;
  editProfileForm!: FormGroup;

  constructor(public commonService:CommonService){}

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
      this.eventImage = reader.result;
    }
    
    reader.readAsDataURL(event.target.files[0]);
  }
  onEdit() {
    this.disabledEdit = !this.disabledEdit;
    if (this.disabledEdit) {
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
  }

  getUserDetails(){
    this.commonService.getUser().subscribe({
      next:(res:any)=>{
        console.log("Res ",res);
      }
    })
  }
}
