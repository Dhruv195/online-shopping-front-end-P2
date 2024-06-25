import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCardComponent } from 'src/app/shared/common/featured-card/featured-card.component';
import { CategoryCarousulSectionComponent } from './category-carousul-section/category-carousul-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FeaturedCardComponent,CategoryCarousulSectionComponent,CategorySectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
