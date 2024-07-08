import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-order-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderViewComponent implements OnInit {
  order: any;
  orderId: any;
  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        if (res.id) {
          this.orderId = res.id;
        }
      },
    });
    this.getOrder(this.orderId);
  }

  /**
   * call breadcrumb service
   */
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Detail',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Your Order', link: '/order-view' },
      ],
    });
  }

  /**
   *
   * @param orderId get product by particular Id
   */
  getOrder(orderId: any) {
    this.orderService.getOrderById(orderId).subscribe({
      next: (res: any) => {
        this.order = res.data;
        console.log(this.order, 'Good');
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.order = {};
      },
    });
  }
}
