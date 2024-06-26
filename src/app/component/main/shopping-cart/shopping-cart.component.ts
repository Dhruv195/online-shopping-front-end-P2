import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { TotalOrderCardComponent } from 'src/app/shared/common/total-order-card/total-order-card.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,ShoppingCartListComponent,TotalOrderCardComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  subTotal: number = 0;
  constructor(public commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.changeBreadCrumbData();
  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Cart',
      linkList: [
        { label:'Home',link:'/'},
        { label:'Shop',link:'/shop'},
        { label:'Shopping Cart',link:'/shopping-cart'},
      ]
    })
  }

  onSubTotalChanged(subTotal: number) {
    this.subTotal = subTotal;
  }
}
