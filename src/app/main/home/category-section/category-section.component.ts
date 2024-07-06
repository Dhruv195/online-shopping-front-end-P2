import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/shared/service/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent implements OnInit {
  

  categories: any;

  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        if (res.data) {
          this.categories = res.data.categories;
        }
      },
    });
  }
  onCategoryClick(categoryId:any) {
    let params = {
      'categoryId':categoryId,
    }
    console.log("Search Bar params ",params)
    this.router.navigate(
      ['/shop'],
      {
        queryParams: params,
        queryParamsHandling: 'merge',
      }
    );
  }
  
}
