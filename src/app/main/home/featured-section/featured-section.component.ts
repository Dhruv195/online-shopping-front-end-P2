import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featuredItems } from 'src/app/shared/constant/common-function';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent {

  featuredItems = featuredItems

}
