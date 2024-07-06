import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  navigationList = [
    {
      navigationLabel: 'Quick Link',
      navigationLinks: [
        {
          label: 'Home',
          link: '/home',
        },
        {
          label: 'Our Shop',
          link: '/shope',
        },    {
          label: 'Shopping Cart',
          link: '/shopping-cart',
        },    {
          label: 'Checkout',
          link: '/checkout',
        },    {
          label: 'Contact Us',
          link: '/Contact',
        }
      ],
    },
    {
      navigationLabel: 'My Account',
      navigationLinks: [
        {
          label: 'Home',
          link: '/home',
        },
        {
          label: 'Our Shop',
          link: '/shope',
        },    {
          label: 'Shopping Cart',
          link: '/shopping-cart',
        },    {
          label: 'Checkout',
          link: '/checkout',
        },    {
          label: 'Contact Us',
          link: '/Contact',
        }
      ],
    },
  ];
}
