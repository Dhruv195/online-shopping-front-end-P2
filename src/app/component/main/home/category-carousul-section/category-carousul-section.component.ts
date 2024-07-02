import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-category-carousul-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-carousul-section.component.html',
  styleUrls: ['./category-carousul-section.component.scss'],
})
export class CategoryCarousulSectionComponent {
  carouselItems: any[] = [
    // {
    //   image: 'assets/img/carousel-1.jpg',
    //   alt: 'Men Fashion',
    //   title: 'Men Fashion',
    //   description:
    //     'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
    //   buttonText: 'Shop Now',
    //   buttonLink: '/shop-detail',
    // },
    // {
    //   image: 'assets/img/carousel-2.jpg',
    //   alt: 'Women Fashion',
    //   title: 'Women Fashion',
    //   description:
    //     'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
    //   buttonText: 'Shop Now',
    //   buttonLink: '/shop-detail',
    // },
    // {
    //   image: 'assets/img/carousel-3.jpg',
    //   alt: 'Kids Fashion',
    //   title: 'Kids Fashion',
    //   description:
    //     'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
    //   buttonText: 'Shop Now',
    //   buttonLink: '/shop-detail',
    // },
  ];



  constructor(private productService: ProductService) {}

  products: any;
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.productService.getCategoryList().subscribe({
      next: (res: any) => {
        console.log('Caroisel ', res);
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
              console.log(bannerItem, 'dd');
            }
          });
          console.log(this.carouselItems, 'srg');
        }
        // this.carouselItems = res.data.products;
      },
    });
  }
}
