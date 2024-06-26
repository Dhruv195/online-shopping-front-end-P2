import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCardComponent } from 'src/app/shared/common/featured-card/featured-card.component';
import { CategoryCarousulSectionComponent } from './category-carousul-section/category-carousul-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { FeaturedProductSectionComponent } from './featured-product-section/featured-product-section.component';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FeaturedSectionComponent,CategoryCarousulSectionComponent,CategorySectionComponent,FeaturedProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public commonService:CommonService){}
  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData.next(null);
  }
}
