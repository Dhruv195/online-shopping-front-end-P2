import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent {

  featuredItems = [
    {
      icon: "fa-check",
      title: "Quality Product",
    },
    {
      icon: "fa-shipping-fast",
      title: "Free Shipping",
    },
    {
      icon: "fa-exchange-alt",
      title: "14-Day Return",
    },
    {
      icon: "fa-phone-volume",
      title: "24/7 Support",
    },
  ];

}
