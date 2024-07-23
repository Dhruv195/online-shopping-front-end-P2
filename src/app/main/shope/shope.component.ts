import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
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
    ProductCardComponent,
    ProductListViewComponent,
    NgbModule,
    FilterCardComponent,
    NgxSliderModule
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
  params: any = {};
  productList: any;
  displayMode: string = 'grid';
  minValue: number = 0;
  maxValue: number = 50000;
  options: Options = {
    floor: 0,
    ceil: 50000,
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

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.getProductListAndTotalProduct();
    this.fetchQueryParams();
    this.getColors();
  }

  fetchQueryParams() {
    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      this.searchParams = { ...params.params };
      this.handlePrams();
    });
  }

  handlePrams() {
    this.params = {
      ...this.params,
      ...this.searchParams,
      page: this.page,
      items: this.pageSize,
    };
    this.updateQueryParams();
  }

  onChangePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.handlePrams();
  }

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

  onFilterChanged(selectedFilters: any) {
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

    // Add new filters
    Object.keys(selectedFilters).forEach((element: any) => {
      if (element && selectedFilters[element].length && !selectedFilters[element].includes(`All ${element.charAt(0).toUpperCase() + element.slice(1)}`)) {
        selectedFilters[element].forEach((item: any, index: any) => {
          this.params[element + `[${index}]`] = item;
        });
      }
    });

    this.updateQueryParams();
  }

  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }

  getProductList(params: any) {
    this.productService.getProductList(params).subscribe({
      next: (res: any) => {
        
        this.productService.productList.next(res.data.products);
        this.productService.totalProducts.next(res.data.total_count);

        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: params,
        });
        this.cd.markForCheck();
      },
    });
  }

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

  changePageOfProduct(page: any) {
    this.page = page;
    this.handlePrams();
  }

  getMinMaxPrice(priceMinMax: any) {
    this.params = {
      ...this.params,
      minPrice: this.minValue,
      maxPrice: this.maxValue,
    };
    this.updateQueryParams();
  }

  updateQueryParams() {
    const queryParams = { ...this.params };

    // Remove empty params
    Object.keys(queryParams).forEach((key) => {
      if (!queryParams[key]) {
        delete queryParams[key];
      }
    });

    
    console.log("QueryPrams => ",queryParams)

    this.getProductList(queryParams);
  }

  getColors() {
    this.commonService.getColor().subscribe({
      next: (res: any) => {
        const color = {
          title: 'All Color',
          total: 1000,
        };
        this.colorList.push(color);

        if (res.success) {
          res.data.forEach((element: any) => {
            const color = {
              title: element,
              total: 100,
            };
            this.colorList.push(color);
          });
          this.filters[0].color = this.colorList;
          this.cd.markForCheck();
        }
      },
    });
  }
}
