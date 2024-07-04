import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductListViewComponent } from 'src/app/shared/common/product-list-view/product-list-view.component';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, ProductListViewComponent],
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
}
