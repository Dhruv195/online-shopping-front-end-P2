import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-shope-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shope-details.component.html',
  styleUrls: ['./shope-details.component.scss'],
})
export class ShopeDetailsComponent {
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData.next({
      pageTitle: 'Shop Detail',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Shop Detail', link: '/shop-detail' },
      ],
    });
  }

  products: any = {
    products: [
      {
        _id: '667a93516a95e65e828409cc',
        productName: 'Nike Running Shoes',
        images: [
          'assets/img/product-1.jpg',
          'assets/img/product-2.jpg',
          'assets/img/product-3.jpg',
        ],
        price: 120,
        sellingPrice: 100,
        colors: ['Red', 'Blue'],
        size: ['8', '9', '10'],
        mainDescription: 'Comfortable running shoes from Nike',
        subDescription: 'Perfect for runners looking for a lightweight shoe.',
        tags: ['shoes', 'nike', 'running'],
        ratings: 0,
        reviews: 0,
        information: {
          description: 'Breathable and lightweight running shoes',
          infoPoints: ['Lightweight', 'Breathable', 'Comfortable'],
        },
        isFeatured: true,
        isActive: true,
        category: {
          categoryName: 'Sports',
          bannerImage: 'https://example.com/banner/sports.jpg',
          image: 'https://example.com/image/sports.jpg',
          banner: false,
          isActive: true,
        },
      },
    ],
    page: 1,
    items: 2,
    total_count: 10,
  };
}
