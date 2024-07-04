import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-featured-product-section',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent],
  templateUrl: './featured-product-section.component.html',
  styleUrls: ['./featured-product-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductSectionComponent implements OnInit {
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

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  products: any[] = [];
  ngOnInit(): void {
    this.getProduct();
  }

  /**
   * getProduct() call API for Product-List
   */
  getProduct() {
    this.productService.getProductList('').subscribe({
      next: (res: any) => {
        this.products = res.data.products;
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.products = [];
      },
    });
  }
}
