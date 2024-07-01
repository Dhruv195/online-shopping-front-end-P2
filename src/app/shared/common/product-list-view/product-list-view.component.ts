import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent {
  @Input() product: any;
  ngOnInit(): void {
    console.log(this.product);
  }
}
