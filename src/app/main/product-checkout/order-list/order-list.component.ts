import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductListViewComponent } from 'src/app/shared/components/product-list-view/product-list-view.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, ProductListViewComponent, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent implements OnInit {
  orderList: any[] = [];
  constructor(
    private commonService: CommonService,
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * Call
   */
  ngOnInit(): void {
    this.getOrder();
    this.changeBreadCrumbData();
  }

  /**
   * changeBreadCrumbData()  call breadCrumb service
   */
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Product Checkout',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Order List', link: '/order-list' },
      ],
    });
  }

  /**
   * getOrder() call API for orderList
   */
  getOrder() {
    this.orderService.getOrderList().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.orderList = res.data.orders;
        }
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.orderList = [];
      },
    });
  }

  cancelOrder(id:any) {
    this.commonService.removeOrder(id).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.getOrder()
        }
      }
    })
  }
}
