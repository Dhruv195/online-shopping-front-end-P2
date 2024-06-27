import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-carousul-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-carousul-section.component.html',
  styleUrls: ['./category-carousul-section.component.scss'],
})
export class CategoryCarousulSectionComponent {
  carouselItems = [
    {
      image: 'assets/img/carousel-1.jpg',
      alt: 'Men Fashion',
      title: 'Men Fashion',
      description:
        'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
      buttonText: 'Shop Now',
      buttonLink: '/shop-detail',
    },
    {
      image: 'assets/img/carousel-2.jpg',
      alt: 'Women Fashion',
      title: 'Women Fashion',
      description:
        'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
      buttonText: 'Shop Now',
      buttonLink: '/shop-detail',
    },
    {
      image: 'assets/img/carousel-3.jpg',
      alt: 'Kids Fashion',
      title: 'Kids Fashion',
      description:
        'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
      buttonText: 'Shop Now',
      buttonLink: '/shop-detail',
    },
  ];
}
