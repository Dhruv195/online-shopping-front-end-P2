import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { RouterLink, RouterModule } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { API } from 'src/app/shared/constant/api.constant';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [EditProfileComponent, RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  userDetails:any;
  defaultProfileImg:any;
  constructor(private commonService:CommonService,private userService:UserService,private cd:ChangeDetectorRef){}
  /**
   * BreadCrumb Data Set
   */
  ngOnInit(): void {
    // this.changeBreadCrumbData();
    this.getUserDetails();
  }
  
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Edit Profile', link: '/edit-profile' },
      ],
    });
  }
  getUserDetails(){
    this.userService.userDetails$.subscribe({
      next: (res: any) => {
        this.userDetails=res.data;
        this.defaultProfileImg=API.USER_NAME_PROFILE_IMG+`${this.userDetails?.firstName}+${this.userDetails?.lastName}`
        this.cd.markForCheck()
      }
    })
  }
}
