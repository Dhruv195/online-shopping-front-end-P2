import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROFILE_ITEMS } from 'src/app/shared/constant/common-function';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  profileUrls = PROFILE_ITEMS;

  onProfileItemClick(item:any) {
    if (item == 'Sign Out') {
      localStorage.removeItem('token')
    }
  }
}
