import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressFormComponent } from 'src/app/shared/common/address-form/address-form.component';

@Component({
  selector: 'app-product-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,AddressFormComponent],
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss'],
})
export class ProductCheckoutComponent {
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Product Checkout',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Checkout', link: '/checkout' },
      ],
    });
  }

  addressForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
  });

  shippingAddress = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
  });


  formData = {
    billingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      addressLine1: '',
      addressLine2: '',
      country: 'United States',
      city: '',
      state: '',
      zipCode: ''
    },
    shippingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      addressLine1: '',
      addressLine2: '',
      country: 'United States',
      city: '',
      state: '',
      zipCode: ''
    },
    orderTotal: {
      products: [
        { name: 'Product Name 1', price: 150 },
        { name: 'Product Name 2', price: 150 },
        { name: 'Product Name 3', price: 150 }
      ],
      subtotal: 450,
      shipping: 10,
      total: 460
    },
    paymentMethod: 'paypal'
  };
  showShippingAddress: boolean = false;

  toggleShippingAddress(): void {
    
    this.showShippingAddress = !this.showShippingAddress;
  }


  
}
