import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { API } from 'src/app/shared/constant/api.constant';
import { DropdownDirective } from 'src/app/shared/directive/dropdown.directive';
import { TOAST_TYPE } from 'src/app/shared/constant/toast';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-top-bar-first-layer',
  standalone: true,
  imports: [CommonModule, RouterModule,DropdownDirective],
  templateUrl: './top-bar-first-layer.component.html',
  styleUrls: ['./top-bar-first-layer.component.scss'],
})
export class TopBarFirstLayerComponent implements OnInit {
  links = [
    { name: 'About', url: '#' },
    { name: 'Contact', url: 'contact' },
    { name: 'Help', url: '#' },
    { name: 'FAQs', url: '#' },
  ];

  languages = [
    { label: 'EN', lang: 'English', subset: 'latin' },
    { label: 'FR', lang: 'French', subset: 'latin-ext' },
    { label: 'AR', lang: 'Arabic', subset: 'arabic' },
    { label: 'RU', lang: 'Russian', subset: 'cyrillic' },
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
      title: 'Order List',
      link: '/user-profile/order-list',
      icon:'bi bi-card-checklist fs-4 text-primary'
    },
    {
      title: 'Sign Out',
      link: '/home',
      icon:'bi bi-box-arrow-right fs-4 text-primary'
    }
  ]



  constructor(public authService:AuthService,public userService:UserService,public commonService:CommonService){}
  ngOnInit(): void {
  }
  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = this.languages.find(
      (lang) => lang.label === selectElement.value
    );
    if (selectedLanguage) {
      this.loadGoogleFont(selectedLanguage.subset);
    }
  }
  loadGoogleFont(subset: string) {
    // Remove existing font link if any
    const existingLinkElement = document.getElementById('google-font-link');
    if (existingLinkElement) {
      existingLinkElement.remove();
    }

    console.log(subset);

    // Create new font link
    const linkElement = document.createElement('link');
    linkElement.id = 'google-font-link';
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://fonts.googleapis.com/css2?family=Roboto&subset=${subset}`;
    document.head.appendChild(linkElement);
  }

  clickOnProfileItem(profile:any) {
    if (profile.title == 'Sign Out') {
      localStorage.removeItem('token');
      this.commonService.showToastMessage(TOAST_TYPE.success,'Sign Out Successfully')
    }
  }
  
}
