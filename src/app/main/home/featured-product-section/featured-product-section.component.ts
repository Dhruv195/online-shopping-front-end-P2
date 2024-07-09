import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-featured-product-section',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './featured-product-section.component.html',
  styleUrls: ['./featured-product-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductSectionComponent implements OnInit {
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
        res.data.products.forEach((element: any) => {
          if (element.isFeatured) {
            this.products.push(element);
          }
        });
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.products = [];
      },
    });
  }
}
