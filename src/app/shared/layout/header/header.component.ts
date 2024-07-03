import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { API } from '../../constant/api.constant';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapseCategory = false;
  categories = [
    {
      title: 'Dresses',
      link: '/shop',
    },
    {
      title: 'Shirts',
      link: '/shop',
    },
    {
      title: 'Jeans',
      link: '/shop',
    },
  ];
  headerNav = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Shop',
      link: '/shop',
    },
  ];
  profileRoutes = [
    {
      title: 'Edit Profile',
      link: '/user-profile',
      icon:'bi bi-person-fill text-primary fs-4'
    },
    {
      title: 'Change Password',
      link: '/user-profile/change-password',
      icon:"bi bi-lock-fill fs-4 text-primary"
    },
    {
      title: 'Cart Item',
      link: '/user-profile/shopping-cart',
      icon:'bi bi-cart-fill fs-4 text-primary'
    },
    {
      title: 'Wish List',
      link: '/user-profile/wish-list',
      icon:'bi bi-list-stars fs-4 text-primary'
    },
    {
      title: 'Sign Out',
      link: '/home',
      icon:'bi bi-box-arrow-right fs-4 text-primary'
    }
  ]
  profileImage: any;
  defaultProfileImg: any;
  userDetails: any;
  constructor(public commonService: CommonService,public authService:AuthService,public userService:UserService) {}
  ngOnInit(): void {
    
  }
  doSignOut() {
    localStorage.removeItem('token')
  }

  onSelectCategory() {
    console.log('cate');
    this.collapseCategory = true;
  }
  clickOnProfileItem(profile:any) {
    if (profile.title == 'Sign Out') {
      localStorage.removeItem('token');
    }
  }

  getUserDetails() {
    this.userService.getUser().subscribe({
      next: (res: any) => {
        this.userDetails = res.data;
        this.profileImage = this.userDetails.profilePic;
        this.defaultProfileImg = API.USER_NAME_PROFILE_IMG + `${this.userDetails?.firstName}+${this.userDetails?.lastName}`
      }
    });
    
  }
}
