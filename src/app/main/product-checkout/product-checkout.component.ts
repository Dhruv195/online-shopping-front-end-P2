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
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { OrderService } from 'src/app/shared/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCheckoutComponent {
  billingAddressForm!: FormGroup;
  shippingAddressForm!: FormGroup;
  showShippingAddress = false;
  submitted = false;
  paymentMethod: any;
  formData: any = {
    orderTotal: {
      products: [],
      subtotal: 0,
      shipping: 10,
      total: 10,
    },
  };
  countries = ['USA', 'Canada', 'UK'];

  paymentMethodList = ['Paytm', 'Google Pay', 'Paypal'];

  constructor(
    public commonService: CommonService,
    private fb: FormBuilder,
    private productService: ProductService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private orderService: OrderService,
    private router: Router
  ) {}

  /**
   * Call breadcrumb and UserCart-detail function
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.createAddressForm();

    this.getUserCartDetail();
  }
  /**
   * changeBreadCrumbData()  call breadCrumb service
   */
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

  /**
   *
   * @returns Forms with multiple FormControls
   */
  createAddressForm() {
    this.billingAddressForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNo: new FormControl('', Validators.required),
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      country: new FormControl('', Validators.required),
    });

    this.shippingAddressForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNo: new FormControl('', Validators.required),
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      country: new FormControl('', Validators.required),
    });
  }

  /**
   * Toggle the shipping address
   */
  toggleShippingAddress(event: any) {
    this.showShippingAddress = event.target.checked;
    if (!this.showShippingAddress) {
      this.shippingAddressForm.reset();
    }
  }

  /**
   * getUserCartDetail() call API for user-cart detail
   */
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

  /**
   *
   * @returns Valid the form and call get post API
   */
  onSubmit(): void {
    this.submitted = true;
    if (
      this.billingAddressForm.valid &&
      (this.showShippingAddress ? this.shippingAddressForm.valid : true)
    ) {
      // console.log('Order Placed!', {
      //   billingAddress: this.billingAddressForm.value,
      //   shippingAddress: this.showShippingAddress
      //     ? this.shippingAddressForm.value
      //     : null,
      //   paymentMethod: this.paymentMethod,
      // });
    }

    const billingAddress = this.billingAddressForm.value;
    const shippingAddress = this.showShippingAddress
      ? this.shippingAddressForm.value
      : billingAddress;
    const orderData: any = {
      billingAddress: shippingAddress,
      shippingCharge: this.formData.orderTotal.shipping,
      paymentMethod: this.paymentMethod,
    };
    this.addToCheckout(orderData);
  }

  /**
   *
   * @param orderData Add post data in addToCart API
   */
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
