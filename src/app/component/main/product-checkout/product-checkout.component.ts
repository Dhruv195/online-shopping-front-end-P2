import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-product-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent {
  constructor(public commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Product Checkout',
      linkList: [
        { label:'Home',link:'/'},
        { label:'Shop',link:'/shop'},
        { label:'Checkout',link:'/checkout'},
      ]
    })
  }
}
