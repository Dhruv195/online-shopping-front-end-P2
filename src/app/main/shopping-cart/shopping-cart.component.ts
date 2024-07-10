import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { TotalOrderCardComponent } from 'src/app/shared/components/total-order-card/total-order-card.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { TOAST_TYPE } from 'src/app/shared/constant/toast';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, TotalOrderCardComponent, FormsModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  subTotal = 10;
  cartProductList: any[] = [];

  subscription: Subscription = new Subscription();

  couponName: string = '';
  isCouponApplied: boolean = false;
  totalAmount!: number;
  originalTotalAmount!: number;
  someAddedCart = [
    {
      productId: '',
      productName: 'Product Name',
      price: 150,
      quantity: 5,
      totalProductPrice: 150,
      Images: ['assets/img/product-1.jpg'],
    },
    {
      productId: '',
      productName: 'Product Name',
      price: 150,
      quantity: 1,
      totalProductPrice: 150,
      Images: ['assets/img/product-1.jpg'],
    },
    {
      productId: '',
      productName: 'Product Name',
      price: 150,
      quantity: 1,
      totalProductPrice: 150,
      Images: ['assets/img/product-1.jpg'],
    },
  ];

  constructor(
    public commonService: CommonService,
    private productService: ProductService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    if (this.authService.loggedIn()) {
      this.getUserCartDetail();
    } else {
      this.cartProductList = this.getLocalStorage('cartProductList');
      if (this.cartProductList == undefined) {
        this.cartProductList = [];
        this.setLocalStorage('cartProductList', this.cartProductList);
      }
      this.commonService.subTotalAmount$.next(this.calculateSubTotal());
      this.commonService.totalCartItem$.next(this.cartProductList.length);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  setLocalStorage(typeOfString: any, storeData: any) {
    localStorage.setItem(typeOfString, JSON.stringify(storeData));
  }
  getLocalStorage(typeOfString: any) {
    let localStorageData = localStorage.getItem(typeOfString);
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }
  }

  quantityMinus(product: any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.updateTotal(product);
    }
    this.commonService.subTotalAmount$.next(this.calculateSubTotal());
  }
  quantityPlus(product: any) {
    product.quantity += 1;
    this.updateTotal(product);
    this.commonService.subTotalAmount$.next(this.calculateSubTotal());
  }
  updateTotal(product: any) {
    product.totalProductPrice = product.price * product.quantity;
  }
  deleteProduct(productId: any, index: any) {
    if (this.authService.loggedIn()) {
      this.removeProductCart(productId);
    } else {
      this.cartProductList.splice(index, 1);
      this.setLocalStorage('cartProductList', this.cartProductList);
      this.commonService.totalCartItem$.next(this.cartProductList.length);
      this.commonService.subTotalAmount$.next(this.calculateSubTotal());
    }
  }
  calculateSubTotal() {
    const subTotal = this.cartProductList.reduce(
      (sum: number, product: any) => sum + product.price * product.quantity,
      0
    );
    return subTotal;
  }

  getUserCartDetail() {
    this.productService.getUserCart().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.cartProductList = res.data.products;
          this.commonService.subTotalAmount$.next(res.data.totalAmount);
          localStorage.setItem('totalAmount', res.data.totalAmount);
          this.commonService.totalCartItem$.next(
            this.cartProductList?.length || 0
          );
          this.cdr.markForCheck();
        } else {
          this.cartProductList = [];
          this.cdr.markForCheck();
        }
      },
    });
  }

  removeProductCart(productId: any) {
    this.productService.deleteProductCart(productId).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.getUserCartDetail();
        }
        this.cdr.markForCheck();
      },
    });
  }

  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Cart',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Shopping Cart', link: '/shopping-cart' },
      ],
    });
  }

  onSubTotalChanged(subTotal: number) {
    this.subTotal = subTotal;
  }
  checkOutOrder() {
    const cartList: any[] = [];
    this.cartProductList.forEach((element: any) => {
      const cartItem = {
        productId: element.productId,
        quantity: element.quantity,
        color: element.color,
        size: element.size,
      };
      cartList.push(cartItem);
    });

    this.addCartList(cartList);

    if (this.authService.loggedIn()) {
      this.addCartList(cartList);
      this.productService.addProductToCart(this.cartProductList);
    } else {
      this.router.navigate(['/checkout']);
    }
  }

  addCartList(cartList: any[]) {
    this.productService.addProductToCart({ product: cartList }).subscribe({
      next: (res: any) => {
        this.router.navigate(['/checkout']);
        this.cdr.markForCheck();
      },
    });
  }

}
