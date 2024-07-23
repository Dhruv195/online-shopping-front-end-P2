import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/shared/service/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySectionComponent implements OnInit, AfterViewInit {
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.getCategory();
  }

  ngAfterViewInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.categories = [...res.data.categories];
          this.cdr.markForCheck();
        }
      },
      error: (err: any) => {
        console.error('Error fetching categories:', err);
      },
    });
  }

  onCategoryClick(categoryId: any) {
    let params = {
      categoryId: categoryId,
    };
    this.router.navigate(['/shop'], {
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  trackByCategoryId(index: number, category: any): number {
    return index;
  }
}
