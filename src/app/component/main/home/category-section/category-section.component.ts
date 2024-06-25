import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent {

  categories = [
    {
      image: "assets/img/cat-1.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-2.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-3.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-4.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-1.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-2.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-3.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-4.jpg",
      name: "Category Name",
      products: 100,
    },    {
      image: "assets/img/cat-1.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-2.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-3.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-4.jpg",
      name: "Category Name",
      products: 100,
    },    {
      image: "assets/img/cat-1.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-2.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-3.jpg",
      name: "Category Name",
      products: 100,
    },
    {
      image: "assets/img/cat-4.jpg",
      name: "Category Name",
      products: 100,
    },
    // Repeat or add more categories as needed
  ];

}
