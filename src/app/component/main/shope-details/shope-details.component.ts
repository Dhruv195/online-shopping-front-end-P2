import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecursiveAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-shope-details',
  standalone: true,
  imports: [
    CommonModule,
    ProdcutCardComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './shope-details.component.html',
  styleUrls: ['./shope-details.component.scss'],
})
export class ShopeDetailsComponent {
  constructor(public commonService: CommonService,private router:Router) {}
  addProductData = {
    productId: '667d5b274d385bcde22cf76b',
    quantity: 9,
    price: 100,
    size: 'XL',
    color: 'black',
  };

  ngOnInit(): void {
    this.changeBreadCrumbData();
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

  quantityMinus() {
    if (this.addProductData.quantity > 1) {
      this.addProductData.quantity -= 1;
    }
  }
  quantityPlus() {
    this.addProductData.quantity += 1;
  }
  addToCart() {
    
    console.log(this.addProductData);
    this.router.navigate(['/shopping-cart'])
  }

  products: any = {
    products: [
      {
        _id: '667a93516a95e65e828409cc',
        productName: 'Nike Running Shoes',
        images: [
          'assets/img/product-1.jpg',
          'assets/img/product-2.jpg',
          'assets/img/product-3.jpg',
        ],
        price: 120,
        sellingPrice: 100,
        colors: ['Red', 'Blue'],
        size: ['8', '9', '10'],
        mainDescription: 'Comfortable running shoes from Nike',
        subDescription: 'Perfect for runners looking for a lightweight shoe.',
        tags: ['shoes', 'nike', 'running'],
        ratings: 3,
        reviews: 3,
        information: {
          description: 'Breathable and lightweight running shoes',
          infoPoints: ['Lightweight', 'Breathable', 'Comfortable'],
        },
        isFeatured: true,
        isActive: true,
        category: {
          categoryName: 'Sports',
          bannerImage: 'https://example.com/banner/sports.jpg',
          image: 'https://example.com/image/sports.jpg',
          banner: false,
          isActive: true,
        },
      },
    ],
    page: 1,
    items: 1,
    total_count: 10,
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

  productList = [
    {
      image: 'assets/img/product-1.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-2.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-3.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-4.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-5.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
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
