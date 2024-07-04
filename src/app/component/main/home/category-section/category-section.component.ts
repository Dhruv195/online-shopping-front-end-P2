import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/shared/service/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CategorySectionComponent implements OnInit {

  categories: any[]=[];

  constructor(private productService: ProductService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCategory();
  }
  /**
   * getCategory() call API for category
   */
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        if (res.data) {
          this.categories = res.data.categories;
        }
        this.cdr.markForCheck()
      },
      error: (err:any) => {
        this.categories=[] 
      }
    });
  }
}
