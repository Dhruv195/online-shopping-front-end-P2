import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import {
  FormBuilder,
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
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressFormComponent,
  ],
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss'],
})
export class ProductCheckoutComponent {
  constructor(public commonService: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.billingAddressForm = this.createAddressForm();
    this.shippingAddressForm = this.createAddressForm();
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

  billingAddressForm!: FormGroup;
  shippingAddressForm!: FormGroup;
  showShippingAddress = false;
  submitted = false;

  formData = {
    orderTotal: {
      products: [
        { name: 'Product 1', price: 50 },
        { name: 'Product 2', price: 30 },
      ],
      subtotal: 80,
      shipping: 10,
      total: 90,
    },
  };

  createAddressForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  toggleShippingAddress(): void {
    this.showShippingAddress = !this.showShippingAddress;
    if (!this.showShippingAddress) {
      this.shippingAddressForm.reset();
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.billingAddressForm.invalid) {
      return;
    }

    if (this.showShippingAddress && this.shippingAddressForm.invalid) {
      return;
    }

    const billingAddress = this.billingAddressForm.value;
    const shippingAddress = this.showShippingAddress
      ? this.shippingAddressForm.value
      : billingAddress;

    // Process the form data
    console.log('Billing Address:', billingAddress);
    console.log('Shipping Address:', shippingAddress);
  }
}
