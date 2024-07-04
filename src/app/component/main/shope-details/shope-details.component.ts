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
  constructor(
    public commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) {}
  addProductCart = {
    productId: 0,
    quantity: 1,
    price: 0,
    size: '',
    color: '',
  };

  addProductData = {
    productId: '',
    productName: '',
    price: 0,
    quantity: 1,
    totalProductPrice: 0,
    Images: [],
  };

  cartList: any[] = [];
  productId: any;
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.id) {
          this.productId = res.id;
        }
      },
    });
    this.getProduct(this.productId);
    this.getRelatedProduct(this.productId);
    console.log(this.productId);
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

  getProduct(productId: any) {
    this.productService.getProductById(productId).subscribe({
      next: (res: any) => {
        console.log('Res ', res);
        this.products = res.data;
        console.log(this.products, 'Good');
      },
    });
  }

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

  products: any = {
    // products: [
    //   {
    //     _id: '667a93516a95e65e828409cc',
    //     productName: 'Nike Running Shoes',
    //     images: [
    //       'assets/img/product-1.jpg',
    //       'assets/img/product-2.jpg',
    //       'assets/img/product-3.jpg',
    //     ],
    //     price: 120,
    //     sellingPrice: 100,
    //     colors: ['Red', 'Blue'],
    //     size: ['8', '9', '10'],
    //     mainDescription: 'Comfortable running shoes from Nike',
    //     subDescription: 'Perfect for runners looking for a lightweight shoe.',
    //     tags: ['shoes', 'nike', 'running'],
    //     ratings: 3,
    //     reviews: 3,
    //     information: {
    //       description: 'Breathable and lightweight running shoes',
    //       infoPoints: ['Lightweight', 'Breathable', 'Comfortable'],
    //     },
    //     isFeatured: true,
    //     isActive: true,
    //     category: {
    //       categoryName: 'Sports',
    //       bannerImage: 'https://example.com/banner/sports.jpg',
    //       image: 'https://example.com/image/sports.jpg',
    //       banner: false,
    //       isActive: true,
    //     },
    //   },
    // ],
    // page: 1,
    // items: 1,
    // total_count: 10,
  };

  reviewList = {
    _id: '667a93516a95e65e828409cc',
    productName: 'Nike Running Shoes',

    reviews: [
      {
        user_profile_pic: 'assets/img/user.jpg',
        firstName: 'Dhruv',
        lastName: 'Joshi',
        reviewMessage:
          'Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.',
        reviewRating: 4,
        reviewDate: '01/01/2045',
      },
      {
        user_profile_pic: 'assets/img/user.jpg',
        firstName: 'Vishal',
        lastName: 'Joshi',
        reviewMessage:
          'Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.',
        reviewRating: 2,
        reviewDate: '01/01/20',
      },
    ],
  };

  productList: any[] = [
    // {
    //   images:[ 'assets/img/product-1.jpg'],
    //   links: {
    //     cart: '#',
    //     wishlist: '#',
    //     compare: '#',
    //     view: '#',
    //   },
    //   name: 'Product Name Goes Here',
    //   price: '123.00',
    //   sellingPrice: '123.00',
    //   rating: 5,
    //   reviews: 99,
    // },
    // {
    //   images: ['assets/img/product-2.jpg'],
    //   links: {
    //     cart: '#',
    //     wishlist: '#',
    //     compare: '#',
    //     view: '#',
    //   },
    //   name: 'Product Name Goes Here',
    //   price: '123.00',
    //   sellingPrice: '123.00',
    //   rating: 5,
    //   reviews: 99,
    // },
    // {
    //   images: ['assets/img/product-3.jpg'],
    //   links: {
    //     cart: '#',
    //     wishlist: '#',
    //     compare: '#',
    //     view: '#',
    //   },
    //   name: 'Product Name Goes Here',
    //   price: '123.00',
    //   sellingPrice: '123.00',
    //   rating: 5,
    //   reviews: 99,
    // },
    // {
    //   images: ['assets/img/product-4.jpg'],
    //   links: {
    //     cart: '#',
    //     wishlist: '#',
    //     compare: '#',
    //     view: '#',
    //   },
    //   name: 'Product Name Goes Here',
    //   price: '123.00',
    //   sellingPrice: '123.00',
    //   rating: 5,
    //   reviews: 99,
    // },
    // {
    //   images: ['assets/img/product-5.jpg'],
    //   links: {
    //     cart: '#',
    //     wishlist: '#',
    //     compare: '#',
    //     view: '#',
    //   },
    //   name: 'Product Name Goes Here',
    //   price: '123.00',
    //   sellingPrice: '123.00',
    //   rating: 5,
    //   reviews: 99,
    // },
  ];

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
}
