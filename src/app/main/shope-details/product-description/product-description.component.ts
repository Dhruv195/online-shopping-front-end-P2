import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent  {


  constructor(
    public productService: ProductService,
  ) {}


}
