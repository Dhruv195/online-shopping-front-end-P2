import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  contactForm!: any;
  submitted = false;

  constructor(
    public commonService: CommonService,
    public cd: ChangeDetectorRef
  ) {}

  contact = {
    address: '123 Street, New York, USA',
    email: 'info@example.com',
    phone: '+012 345 67890',
  };
  /**
   * BreadCrumbData Set
   * initialize ContactForm
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.initializeContactForm();
  }

  /**
   * Set breadcrumb
   */
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Contact',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Contact', link: '/contact' },
      ],
    });
  }

  /**
   * Initialize the contact-form.
   */
  initializeContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  /**
   * onContactSubmit() function validate the form and call enquiry API.
   */
  onContactSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.addEnquiryData(this.contactForm.value);
    }
  }

  /**
   *
   * @param enquiryData object that contain contact-details
   * This function call Enquiry API
   */
  addEnquiryData(enquiryData: any) {
    this.commonService.addEnquiry(enquiryData).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.contactForm.reset();
          this.submitted = false;
          this.cd.markForCheck();
        }
      },
    });
  }
}
