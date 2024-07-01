import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductListViewComponent } from 'src/app/shared/common/product-list-view/product-list-view.component';

@Component({
  selector: 'app-shope',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent,ProductListViewComponent],
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.scss'],
})
export class ShopeComponent implements OnInit {
  filters = [
    {
      filter_type: 'FILTER BY PRICE',
      filter_items: [
        {
          title: 'All Price',
          total: '1000',
        },
        {
          title: '0-100',
          total: '150',
        },
        {
          title: '100-200',
          total: '290',
        },
        {
          title: '200-300',
          total: '234',
        },
        {
          title: '300-400',
          total: '300',
        },
        {
          title: '400-500',
          total: '230',
        },
      ],
    },

    {
      filter_type: 'FILTER BY COLOR',
      filter_items: [
        {
          title: 'All Color',
          total: '1000',
        },
        {
          title: 'Black',
          total: '150',
        },
        {
          title: 'White',
          total: '290',
        },
        {
          title: 'Red',
          total: '234',
        },
        {
          title: 'Blue',
          total: '300',
        },
        {
          title: 'Green',
          total: '230',
        },
      ],
    },

    {
      filter_type: 'FILTER BY SIZE',
      filter_items: [
        {
          title: 'All Size',
          total: '1000',
        },
        {
          title: 'XS',
          total: '150',
        },
        {
          title: 'S',
          total: '290',
        },
        {
          title: 'M',
          total: '234',
        },
        {
          title: 'L',
          total: '300',
        },
        {
          title: 'XL',
          total: '230',
        },
      ],
    },
  ];
  products = [
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

    // Add more products as needed
  ];
  displayMode: string = 'grid';
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Shop List', link: '/shop' },
      ],
    });
  }
}
