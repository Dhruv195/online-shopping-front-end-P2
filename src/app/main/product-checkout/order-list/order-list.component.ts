import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductListViewComponent } from 'src/app/shared/components/product-list-view/product-list-view.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule,ProductListViewComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{

  orderList:any[]=[]
  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.getOrder()
  }

  getOrder() {

    this.orderService.getOrderList().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.orderList=res.data.orders
        }
      }
    })
   
  }

}
