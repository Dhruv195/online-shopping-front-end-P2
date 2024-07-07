import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    { label: 'EN', lang: 'English',languageCode:'en', subset: 'latin' },
    { label: 'HI', lang: 'English',languageCode:'hi', subset: 'latin' },
    { label: 'FR', lang: 'French',languageCode:'fr',  subset: 'latin-ext' },
    { label: 'AR', lang: 'Arabic',languageCode:'ar', subset: 'arabic' },
    { label: 'RU', lang: 'Russian',languageCode:'ru', subset: 'cyrillic' },
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

  userDetails:any;



  constructor(public authService:AuthService,public userService:UserService,public commonService:CommonService){}
  ngOnInit(): void {
    this.getUserDetails();
  }
  
 

  clickOnProfileItem(profile:any) {
    if (profile.title == 'Sign Out') {
      localStorage.removeItem('token');
      localStorage.removeItem('userDetails');
      this.commonService.showToastMessage(TOAST_TYPE.success,'Sign Out Successfully')
    }
  }

  changeLanguage(languageCode: any) {
    console.log(languageCode);
    document.cookie = 'googtrans=' + `/en/${languageCode}`
    location.reload();
  }
  getUserDetails(){
    if(this.authService.getToken()){
      this.userService.getUser().subscribe({
        next:(res:any)=>{
          this.userDetails=res.data;
        }
      })
    }
    else{
      this.userDetails=null;
    }
    
  }
}
