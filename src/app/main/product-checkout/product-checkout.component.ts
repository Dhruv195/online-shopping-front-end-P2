import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
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
import { AddressFormComponent } from 'src/app/shared/components/address-form/address-form.component';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { OrderService } from 'src/app/shared/service/order.service';
import { Router } from '@angular/router';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCheckoutComponent {
  constructor(
    public commonService: CommonService,
    private fb: FormBuilder,
    private productService: ProductService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.billingAddressForm = this.createAddressForm();
    this.shippingAddressForm = this.createAddressForm();
    this.getUserCartDetail();
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
  paymentMethod: any;
  formData: any = {
    orderTotal: {
      products: [],
      subtotal: 80,
      shipping: 10,
      total: 90,
    },
  };

  paymentMethodList = ['Paytm', 'Google-Pay', 'Paypal'];

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
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  toggleShippingAddress(): void {
    this.showShippingAddress = !this.showShippingAddress;
    if (!this.showShippingAddress) {
      this.shippingAddressForm.reset();
    }
  }

  getUserCartDetail() {
    this.productService.getUserCart().subscribe({
      next: (res: any) => {
        console.log('Res ', res);
        if (res.data) {
          res.data.products.forEach((element: any) => {
            const newProduct = {
              name: element.productName,
              price: element.totalProductPrice,
            };
            console.log(newProduct);
            this.formData.orderTotal.products.push(newProduct);
          });
          this.formData.orderTotal.subtotal = res.data.totalAmount;
          this.formData.orderTotal.total =
            res.data.totalAmount + this.formData.orderTotal.shipping;
        }
        this.cdr.markForCheck();
      },
    });
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

    const orderData: any = {
      billingAddress: shippingAddress,
      paymentMethod: this.paymentMethod,
    };

    this.addToCheckout(orderData);

    // // Process the form data
    // console.log('Billing Address:', billingAddress);
    // console.log('Shipping Address:', shippingAddress);
  }

  addToCheckout(orderData: any) {
    this.orderService.addCheckoutOrder(orderData).subscribe({
      next: (res: any) => {
        console.log(res);
        
        if (res.success) {
          this.router.navigate(['/home']);
        }
      },
    });
  }
}
