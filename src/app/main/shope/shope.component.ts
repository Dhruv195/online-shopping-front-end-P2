import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterCardComponent } from 'src/app/shared/components/filter-card/filter-card.component';
import { FILTER } from 'src/app/shared/constant/common-function';
import {
  Options,
  LabelType,
  NgxSliderModule,
} from '@angular-slider/ngx-slider';
import { ProductListViewComponent } from 'src/app/shared/components/product-list-view/product-list-view.component';

@Component({
  selector: 'app-shope',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductListViewComponent,
    NgbModule,
    FilterCardComponent,
    NgxSliderModule,
  ],
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopeComponent implements OnInit {
  filters = FILTER;
  colorList: any[] = [];
  pageItemArray = [10, 20, 30];
  filterForm: any;
  pageSize = 9;
  page = 1;
  totalProduct: any;
  params: any;
  productList: any;
  displayMode: string = 'grid';
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };
  searchParams: any;
  @ViewChild('priceMinMax') minMaxPrice!: ElementRef;

  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public router: Router,
    public cd: ChangeDetectorRef
  ) {}

  /**
   * BreadCrumbData
   * HandlePrams
   * PagePramsTo fetch getProductList
   * Behaviour Subject to get ProductList and TotalProduct Why ? Because "serch Bar in header"
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.getProductListAndTotalProduct();
    this.fetchQueryParams();
    this.getColors();
  }
  fetchQueryParams() {
    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      this.searchParams = params.params;
      this.handlePrams();
    });
  }

  //page and pageSize in params
  handlePrams() {
    this.params = {
      ...this.params,
      ...this.searchParams,
      page: this.page,
      items: this.pageSize,
    };
    this.getProductList(this.params);
  }

  //change Page size to set Products
  onChangePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.handlePrams();
  }

  //Behaviour Subject to get ProductList and TotalProduct Why ? Because "serch Bar in header"
  getProductListAndTotalProduct() {
    this.productService.productList.subscribe({
      next: (res: any) => {
        this.productList = res;
        this.cd.markForCheck();
      },
      error: (res: any) => {
        this.productList = [];
      },
    });
    this.productService.totalProducts.subscribe({
      next: (res: any) => {
        this.totalProduct = res;
        this.cd.markForCheck();
      },
      error: (res: any) => {
        this.totalProduct = 0;
      },
    });
  }
  //filter Card to get selected filter items
  onFilterChanged(selectedFilters: any) {
    console.log("Slected ")
    // Clear previous filters
    Object.keys(this.params).forEach((key) => {
      if (
        key.includes('price[') ||
        key.includes('color[') ||
        key.includes('size[')
      ) {
        delete this.params[key];
      }
    });

    console.log("Delete params ",this.params)

     
    //handle params for API multiple select price,size 
    Object.keys(selectedFilters).forEach((element : any) => {
      if (element && selectedFilters[element].length && !selectedFilters[element].includes(`All ${element.charAt(0).toUpperCase() + element.slice(1)}`)) {
        selectedFilters[element].forEach((item : any,index : any) => {
            this.params[element+`[${index}]`] = item
        });      
      }
    });

    this.handlePrams();
    console.log('parma select check ', this.params);
    // this.getProductList(this.params);
  }
  //grid View and list View For change View Mode
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  //API Call Of ProductList
  getProductList(params: any) {
    console.log('Get Product List Params +=====> ', params);
    this.productService.getProductList(params).subscribe({
      next: (res: any) => {
        //pass in Behaviour Subject
        this.productService.productList.next(res.data.products);
        this.productService.totalProducts.next(res.data.total_count);
        this.router.navigate(['/shop'], {
          relativeTo: this.activatedRoute,
          queryParams: this.params,
          // queryParamsHandling: 'merge',
        });
        this.cd.markForCheck();
      },
    });
  }
  //set BreadCrumbData
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Shop Page',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Shop List', link: '/shop' },
      ],
    });
  }
  //Change Page and Call API of ProductList
  changePageOfProduct(page: any) {
    this.page = page;
    this.handlePrams();
  }

  getMinMaxPrice(priceMinMax: any) {
    // this.params.minPrice = this.minValue;
    // this.params.maxPrice = this.maxValue;
    this.params = {
      ...this.params,
      minPrice: this.minValue,
      maxPrice: this.maxValue,
    };
    this.getProductList(this.params);
  }

  getColors() {
    this.commonService.getColor().subscribe({
      next: (res: any) => {
        if (res.success) {
          res.data.forEach((element: any) => {
            const color = {
              title: element,
              total: 100,
            };
            this.colorList.push(color);
          });
          // this.filters[1].color = this.colorList;
          console.log(this.colorList);

          this.cd.markForCheck();
        }
      },
    });
  }
}
