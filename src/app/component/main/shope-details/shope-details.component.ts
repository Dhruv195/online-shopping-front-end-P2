import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { reviewList, shareList } from 'src/app/shared/constant/common-function';

@Component({
  selector: 'app-shope-details',
  standalone: true,
  imports: [
    CommonModule,
    ProdcutCardComponent,
    CarouselModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './shope-details.component.html',
  styleUrls: ['./shope-details.component.scss'],
  animations: [
    trigger('autoHeight', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ShopeDetailsComponent {
  addProductCart = {
    productId: 0,
    quantity: 1,
    price: 0,
    size: '',
    color: '',
  };
  products: any = {};

  addProductData = {
    productId: '',
    productName: '',
    price: 0,
    quantity: 1,
    totalProductPrice: 0,
    Images: [],
  };

  productList: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    margin: 29,
    nav: false,
    items: 4,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };

  reviewList = reviewList;
  shareList = shareList;
  constructor(
    public commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  cartList: any[] = [];
  productId: any;

  /**
   * Call breadcrumb and Product-List function
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        if (res.id) {
          this.productId = res.id;
        }
      },
    });
    this.getProduct(this.productId);
    this.getRelatedProduct(this.productId);
  }
  /**
   * call breadcrumb service
   */
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Detail',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Shop Detail', link: '/shop-detail' },
      ],
    });
  }

  /**
   * 
   * @param productId get product by particular Id
   */
  getProduct(productId: any) {
    this.productService.getProductById(productId).subscribe({
      next: (res: any) => {
        console.log('Res ', res);
        this.products = res.data;
        console.log(this.products, 'Good');
      },
      error: (err: any) => {
        this.products = [];
      },
    });
  }

  /**
   * 
   * @param productId get related product by Id
   */
  getRelatedProduct(productId: any) {
    this.productService.getRelatedProducts(productId).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log('Res ', res);
          this.productList = res.data.products;
          this.addProductCart.size = this.products.size[0];
          this.addProductCart.color = this.products.colors[0];
        }
      },
    });
  }

  quantityMinus() {
    if (this.addProductCart.quantity > 1) {
      this.addProductCart.quantity -= 1;
    }
  }
  quantityPlus() {
    this.addProductCart.quantity += 1;
  }

  /**
   * Add to cart localStorage if not login
   * And if login then call addToCart API
   */
  addToCart() {
    (this.addProductCart.productId = this.addProductData.productId =
      this.productId),
      (this.addProductCart.price = this.addProductData.price =
        this.products.sellingPrice);
    if (this.authService.loggedIn()) {
      console.log(this.addProductCart);
      this.productService
        .addProductToCart({ product: this.addProductCart })
        .subscribe({
          next: (res: any) => {
            console.log('response', res);
          },
        });
    } else {
      this.addProductData.Images = this.products.images;
      this.addProductData.productName = this.products.productName;
      this.addProductData.quantity = this.addProductCart.quantity;
      this.addProductData.totalProductPrice =
        this.addProductCart.price * this.addProductCart.quantity;
      console.log(this.addProductData);
      this.cartList =
        this.commonService.getLocalStorage('cartProductList') || [];
      this.cartList.push(this.addProductData);
      this.commonService.setLocalStorage('cartProductList', this.cartList);
    }
    this.router.navigate(['/shopping-cart']);
  }
}
