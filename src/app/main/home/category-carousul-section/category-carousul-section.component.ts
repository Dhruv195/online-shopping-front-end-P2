import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-category-carousul-section',
  standalone: true,
  imports: [RouterModule,
    CurrencyPipe,
    PercentPipe,
    DatePipe],
  templateUrl: './category-carousul-section.component.html',
  styleUrls: ['./category-carousul-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCarousulSectionComponent {
  carouselItems: any[] = [];

  @Input() specialOffer:any[]=[]

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  products: any;
  ngOnInit(): void {
    this.getCategory();
  }

  /**
   * getCategory() call category API
   */
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        if (res.success) {
          res.data.categories.forEach((element: any) => {
            if (element.banner) {
              const bannerItem = {
                image: element.image,
                title: element.categoryName,
                description: element.description,
                buttonText: 'Shop Now',
                buttonLink: '/shop-detail',
              };
              this.carouselItems.push(bannerItem);
            }
          });
          this.cdr.markForCheck();
        }
      },
      error: (err: any) => {
        this.carouselItems = [];
      },
    });
  }
}
