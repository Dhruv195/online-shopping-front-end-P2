import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { TotalOrderCardComponent } from 'src/app/shared/components/total-order-card/total-order-card.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    ShoppingCartListComponent,
    TotalOrderCardComponent,
    FormsModule,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {
  subTotal = 0;
  cartProductList: any[] = [];

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
        console.log('res', res);
        if (res.success) {
          this.cartProductList = res.data.products;
          this.commonService.subTotalAmount$.next(res.data.totalAmount);
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
        console.log('Res ', res);
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
    console.log(this.cartProductList[0]);
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

    console.log(cartList, 'sfsdf');

    this.addCartList(cartList);

    // this.productService.addProductToCart(this.cartProductList)
  }

  addCartList(cartList: any[]) {
    this.productService.addProductToCart({ product: cartList }).subscribe({
      next: (res: any) => {
        console.log('response', res);
        this.router.navigate(['/checkout']);
        this.cdr.markForCheck();
      },
    });
  }
}
