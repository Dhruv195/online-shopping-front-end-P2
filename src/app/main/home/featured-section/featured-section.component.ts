import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEATURE_ITEMS } from 'src/app/shared/constant/common.constant';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent {

  featuredItems = FEATURE_ITEMS

}
