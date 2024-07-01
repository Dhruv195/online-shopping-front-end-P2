import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/shared/service/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent implements OnInit {
  // categories = [
  //   {
  //     image: "assets/img/cat-1.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-2.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-3.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-4.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-1.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-2.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-3.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-4.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },    {
  //     image: "assets/img/cat-1.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-2.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-3.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-4.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },    {
  //     image: "assets/img/cat-1.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-2.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-3.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   {
  //     image: "assets/img/cat-4.jpg",
  //     name: "Category Name",
  //     products: 100,
  //   },
  //   // Repeat or add more categories as needed
  // ];

  categories: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        console.log('Res ', res);
        this.categories = res.data;
      },
    });
  }
}
