import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted=false;

  constructor(public commonService:CommonService){}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.initializeContactForm()
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Contact',
      linkList: [
        { label:'Home',link:'/'},
        { label:'Contact',link:'/contact'}
      ]
    })
  }
  initializeContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message:new FormControl('',Validators.required)
    })
  }

  onContactSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      
    }
  }

}
