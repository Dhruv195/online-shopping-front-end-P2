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
   
  ];
  constructor(public commonService: CommonService) {}
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.setSpecialOffer()
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next(null);
  }

  setSpecialOffer() {
    this.commonService.getSpecialOffer().subscribe({
      next: (res: any) => {
        console.log(res);
        
        if (res.success) {
          console.log(this.specialOfferDetails);
          this.specialOfferDetails = res.data.specialOffers;
        }
      },
    });
  }
}
