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
      link:'/user-profile/edit-profile'
    },
    {
      title: 'Change Password',
      link:'/user-profile/change-password'
    },
    {
      title: 'Shopping Cart',
      link:'/user-profile/shopping-cart'
    },
    {
      title: 'Wish List',
      link:'/user-profile/wish-list'
    }
  ]
}
