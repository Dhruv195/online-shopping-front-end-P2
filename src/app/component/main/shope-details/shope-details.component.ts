import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-shope-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shope-details.component.html',
  styleUrls: ['./shope-details.component.scss']
})
export class ShopeDetailsComponent {
  constructor(public commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Detail',
      linkList: [
        { label:'Home',link:'/'},
        { label:'Shop',link:'/shop'},
        { label:'Shop Detail',link:'/shop-detail'},
      ]
    })
  }
}
