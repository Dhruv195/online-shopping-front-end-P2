import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(public commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData.next({
      pageTitle: 'Shop Cart',
      linkList: [
        { label:'Home',link:'/'},
        { label:'Shop',link:'/shop'},
        { label:'Shopping Cart',link:'/shopping-cart'},
      ]
    })
  }
}
