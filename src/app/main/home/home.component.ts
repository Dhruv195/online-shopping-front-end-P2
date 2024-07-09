import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FeaturedCardComponent } from 'src/app/shared/components/featured-card/featured-card.component';
import { CategoryCarousulSectionComponent } from './category-carousul-section/category-carousul-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { FeaturedProductSectionComponent } from './featured-product-section/featured-product-section.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FeaturedSectionComponent,
    CategoryCarousulSectionComponent,
    CategorySectionComponent,
    FeaturedProductSectionComponent,
    RouterModule,
    CurrencyPipe,
    PercentPipe,
    DatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  specialOfferDetails: any[] = [
    {
      _id: '668cb98faf27a2e0b10f8a2a',
      title: 'Summer Sale',
      description:
        'Enjoy our exclusive summer sale with up to 50% off on selected items.',
      startDate: '2024-07-01T10:03:46.000Z',
      endDate: '2024-07-10T05:22:04.028Z',
      offerImage: 'assets/img/offer-1.jpg',
      type: 'Percentage',
      value: 50,
    },
    {
      _id: '668cb98faf27a2e0b10f8a2b',
      title: 'Holiday Discount',
      description:
        'Get a flat $20 off on your next purchase during the holiday season.',
      startDate: '2024-07-01T00:00:00.000Z',
      endDate: '2024-12-31T23:59:59.999Z',
      offerImage: 'assets/img/offer-2.jpg',
      type: 'Amount',
      value: 20,
    },
  ];
  constructor(public commonService: CommonService) {}
  ngOnInit(): void {
    this.changeBreadCrumbData();
    // this.setSpecialOffer()
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next(null);
  }

  setSpecialOffer() {
    this.commonService.getSpecialOffer().subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log(this.specialOfferDetails);

          this.specialOfferDetails = res.data;
        }
      },
    });
  }
}
