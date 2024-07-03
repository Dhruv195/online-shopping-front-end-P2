import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  profileUrls = [
    {
      title: 'Profile',
      link: '/user-profile/edit-profile',
      icon:'bi bi-person-fill text-primary fs-4'
      
    },
    {
      title: 'Change Password',
      link: '/user-profile/change-password',
      icon:"bi bi-lock-fill fs-4 text-primary"
      
    },
    {
      title: 'Shopping Cart',
      link: '/user-profile/shopping-cart',
      icon:'bi bi-cart-fill fs-4 text-primary'
      
    },
    {
      title: 'Wish List',
      link: '/user-profile/wish-list',
      icon:'bi bi-list-stars fs-4 text-primary'
      
    },
    {
      title: 'Order List',
      link: '/user-profile/order-list',
      icon:'bi bi-card-checklist fs-4 text-primary'
    },
    {
      title: 'Sign Out',
      link:'/home',
      icon:'bi bi-box-arrow-right fs-4 text-primary'

    }
  ]

  onProfileItemClick(item:any) {
    if (item == 'Sign Out') {
      localStorage.removeItem('token')
    }
  }
}
