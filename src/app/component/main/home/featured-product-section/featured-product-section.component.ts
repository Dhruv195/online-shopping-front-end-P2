import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-featured-product-section',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent],
  templateUrl: './featured-product-section.component.html',
  styleUrls: ['./featured-product-section.component.scss'],
})
export class FeaturedProductSectionComponent implements OnInit {
  // products = [
  //   {
  //     image: 'assets/img/product-1.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-2.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-3.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-4.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-1.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-2.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-3.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },
  //   {
  //     image: 'assets/img/product-3.jpg',
  //     links: {
  //       cart: '#',
  //       wishlist: '#',
  //       compare: '#',
  //       view: '#',
  //     },
  //     name: 'Product Name Goes Here',
  //     price: '123.00',
  //     oldPrice: '123.00',
  //     rating: 5,
  //     reviews: 99,
  //   },

  //   // Add more products as needed
  // ];

  constructor(private productService: ProductService) {}

  products: any;
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.productService.getProductList(11111111).subscribe({
      next: (res: any) => {
        console.log('Res ', res);
        this.products = res.data.products;
      },
    });
  }
}
