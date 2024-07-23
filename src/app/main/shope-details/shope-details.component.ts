import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetImageDimensionDirective } from 'src/app/shared/directive/set-image-dimension.directive';
import { CopyLinkDirective } from 'src/app/shared/directive/copy-link.directive';

@Component({
  selector: 'app-shope-details',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    CarouselModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    SetImageDimensionDirective,
    CopyLinkDirective,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopeDetailsComponent {
  constructor(
    public commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  addProductCart = {
    productId: 0,
    quantity: 1,
    price: 0,
    size: '',
    color: '',
  };
  products: any = {};
  currentUrl = window.location.href;

  addProductData = {
    productId: '',
    productName: '',
    price: 0,
    quantity: 1,
    totalProductPrice: 0,
    Images: [],
  };

  routerOfProductInformation: any[] = [
    {
      title: 'Description',
      link: 'product-description',
    },
    {
      title: 'Information',
      link: 'product-information',
    },
    {
      title: 'Reviews',
      link: 'product-reviews',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    margin: 29,
    nav: false,
    items: 4,
    dots: false,
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
  shareList = [
    {
      icon: 'fa-facebook-f',
      link: 'https://www.facebook.com/',
    },
    {
      icon: ' fa-twitter',
      link: 'https://x.com/?lang=en',
    },
    {
      icon: 'fa-linkedin-in',
      link: 'https://in.linkedin.com/',
    },
    {
      icon: 'fa-pinterest',
      link: 'https://in.pinterest.com/',
    },
  ];
  cartList: any[] = [];
  productId: any;
  product: any;
  productList: any;

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.getParams();
    if (this.productId) {
      this.getProduct(this.productId);
      this.getRelatedProduct(this.productId);
    }
    console.log('uRL ');
  }
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

  getParams() {
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        this.productId = res.id;
        this.cd.markForCheck();
      },
    });
  }

  getProduct(productId: any) {
    this.productService.getProductById(productId).subscribe({
      next: (res: any) => {
        this.product = res.data;
        this.productService.productDetails$.next(this.product);
        this.addProductCart.size = this.product.size[0];
        this.addProductCart.color = this.product.colors[0];
        this.cd.markForCheck();
      },
    });
  }

  getRelatedProduct(productId: any) {
    this.productService.getRelatedProducts(productId).subscribe({
      next: (res: any) => {
        this.productList = res.data.products;
        this.cd.markForCheck();
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
  addToCart() {
    (this.addProductCart.productId = this.addProductData.productId =
      this.productId),
      (this.addProductCart.price = this.addProductData.price =
        this.product.sellingPrice);
    if (this.authService.loggedIn()) {
      this.productService
        .addProductToCart({ product: this.addProductCart })
        .subscribe({
          next: (res: any) => {
            if (res.success) {
              this.router.navigate(['/shopping-cart']);
            }
            this.cd.markForCheck();
          },
        });
    } else {
      this.addProductData.Images = this.product.images;
      this.addProductData.productName = this.product.productName;
      this.addProductData.quantity = this.addProductCart.quantity;
      this.addProductData.totalProductPrice =
        this.addProductCart.price * this.addProductCart.quantity;
      this.cartList =
        this.commonService.getLocalStorage('cartProductList') || [];
      this.cartList.push(this.addProductData);
      this.commonService.setLocalStorage('cartProductList', this.cartList);
      this.router.navigate(['/shopping-cart']);
    }
  }
}
