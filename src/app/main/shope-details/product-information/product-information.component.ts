import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent  {


  constructor(
    public productService: ProductService
  ) {}


 
}
