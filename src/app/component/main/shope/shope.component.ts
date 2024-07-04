import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductListViewComponent } from 'src/app/shared/common/product-list-view/product-list-view.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterCardComponent } from 'src/app/shared/common/filter-card/filter-card.component';
import { FILTER } from 'src/app/shared/constant/common-function';
import { Options, LabelType, NgxSliderModule } from "@angular-slider/ngx-slider";
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-shope',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent,ProductListViewComponent,NgbModule,FilterCardComponent,NgxSliderModule],
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShopeComponent implements OnInit ,AfterViewInit {
  filters =FILTER;
  pageItemArray=[10,20,30];
  filterForm: any;
  pageSize=5;
  page = 1;
  totalProduct: any;
  params:any;
  productList:any;
  displayMode: string = 'grid';

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
  @ViewChild('priceMinMax') minMaxPrice!: ElementRef;



  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public router:Router,
    public cd:ChangeDetectorRef
  ) {}


  
  /**
   * BreadCrumbData
   * HandlePagePrams
   * PagePramsTo fetch getProductList
   * Behaviour Subject to get ProductList and TotalProduct Why ? Because "serch Bar in header"
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.handlePagePrams();
    this.getProductList(this.params);
    this.getProductListAndTotaProduct();
  }
  //page and pageSize in params
  handlePagePrams(){
    this.params = {
      ...this.params,
      page: this.page,
      items:this.pageSize
    }
  }
  
  //cahnge Page size to set Products
  onChangePageSize(pageSize:any){
    this.pageSize=pageSize;
    this.handlePagePrams();
    this.getProductList(this.params);
  }
   
  //Behaviour Subject to get ProductList and TotalProduct Why ? Because "serch Bar in header"
  getProductListAndTotaProduct() {
    this.productService.productList.subscribe({
      next: (res: any) => {
        this.productList = res;
        this.cd.markForCheck();
      },
      error:(res:any)=>{
        this.productList=[];
      }
    });
    this.productService.totalProducts.subscribe({
      next: (res: any) => {
        this.totalProduct = res;
        this.cd.markForCheck();
      },
      error:(res:any)=>{
        this.totalProduct=0;
      }
    })
  }
  //filter Card to get selected filter items
  onFilterChanged(selectedFilters: any) {
    // Clear previous filters
    Object.keys(this.params).forEach(key => {
      if (key.includes('price[') || key.includes('color[') || key.includes('size[') || key === 'minPrice' || key === 'maxPrice') {
        delete this.params[key];
      }
    });

     // Handle price filters
    if (selectedFilters.price && selectedFilters.price.length  && !selectedFilters.price.includes('All Price')) {
      const prices = selectedFilters.price.map((price:any) => price.split('-').map(Number));
      const minPrice = Math.min(...prices.map((price:any) => price[0]));
      const maxPrice = Math.max(...prices.map((price:any) => price[1]));

      this.params.minPrice = minPrice;
      this.params.maxPrice = maxPrice;
    }
    //handle params for API multiple select price,size 
    Object.keys(selectedFilters).forEach((element : any) => {
      if (element && element !== 'price' && selectedFilters[element].length && !selectedFilters[element].includes(`All ${element.charAt(0).toUpperCase() + element.slice(1)}`)) {
        selectedFilters[element].forEach((item : any,index : any) => {
            this.params[element+`[${index}]`] = item
        });      
      }
    });
    //for params for getProductListd
    this.getProductList(this.params);
  }
  //grid View and list View For change View Mode
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  //API Call Of ProductList
  getProductList(params:any) {
    this.productService.getProductList(params).subscribe({
      next: (res: any) => {
        //pass in Behaviour Subject
        this.productService.productList.next(res.data.products);
        this.productService.totalProducts.next(res.data.total_count);
        this.router.navigate(
          ['/shop'],
          {
            relativeTo: this.activatedRoute,
            queryParams: this.params,
            // queryParamsHandling: 'merge',
          }
          );
          this.cd.markForCheck();
      }
    })
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
  changePageOfProduct(page:any){
    this.handlePagePrams();
    this.page=page;
    this.getProductList(this.params);
  }


  getMinMaxPrice(priceMinMax:any) {
    console.log(priceMinMax)
    console.log(this.minValue)
    console.log(this.maxValue)
    
  }

  ngAfterViewInit(): void {
    this.params.minPrice = this.minValue;
    this.params.maxPrice = this.maxValue;
    fromEvent(this.minMaxPrice.nativeElement, 'input')
      .pipe(debounceTime(300))
      .subscribe(() => this.getProductList(this.params));
  }
}
