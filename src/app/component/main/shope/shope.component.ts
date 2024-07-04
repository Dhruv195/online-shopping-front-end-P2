import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductListViewComponent } from 'src/app/shared/common/product-list-view/product-list-view.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpParams } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterCardComponent } from 'src/app/shared/common/filter-card/filter-card.component';

@Component({
  selector: 'app-shope',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent,ProductListViewComponent,NgbModule,ReactiveFormsModule,FilterCardComponent],
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.scss'],
})
export class ShopeComponent implements OnInit  {
  filters = [
    {
      title: 'FILTER BY PRICE',
      type :'price',
      price : [
        {
          title: 'All Price',
          total: '1000',
        },
        {
          title: '0-100',
          total: '150',
        },
        {
          title: '100-200',
          total: '290',
        },
        {
          title: '200-300',
          total: '234',
        },
        {
          title: '300-400',
          total: '300',
        },
        {
          title: '400-500',
          total: '230',
        },
      ],
    },

    {
      title: 'FILTER BY COLOR',
      type:'color',
      color: [
        {
          title: 'All Color',
          total: '1000',
        },
        {
          title: 'Black',
          total: '150',
        },
        {
          title: 'White',
          total: '290',
        },
        {
          title: 'Red',
          total: '234',
        },
        {
          title: 'Blue',
          total: '300',
        },
        {
          title: 'Green',
          total: '230',
        },
      ],
    },

    {
      title: 'FILTER BY SIZE',
      type : 'size',
      size: [
        {
          title: 'All Size',
          total: '1000',
        },
        {
          title: 'XS',
          total: '150',
        },
        {
          title: 'S',
          total: '290',
        },
        {
          title: 'M',
          total: '234',
        },
        {
          title: 'L',
          total: '300',
        },
        {
          title: 'XL',
          total: '230',
        },
      ],
    },
  ];
  
  pageItemArray=[10,20,30];
  filterForm: any;
  pageSize=5;
  page = 1;
  totalProduct: any;
  // params=new HttpParams();
  params:any;

  productList:any;
  displayMode: string = 'grid';
  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public router:Router
  ) {}

  categoryId: any;

  

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.id) {
          this.categoryId = res.id;
        }
      },
    });
    this.params = {
      page: this.page,
      items:this.pageSize
    }
    this.getProductList(this.params);
    this.getProductListOfSearch();
  }
  
  onChangePageSize(page:any){
    this.pageSize=page;
    this.params={
      ...this.params,
      items:this.pageSize
    }
    this.getProductList(this.params);
  }
  getProductListOfSearch() {
    this.productService.productList.subscribe({
      next: (res: any) => {
        this.productList = res;
      }
    });
    this.productService.totalProducts.subscribe({
      next: (res: any) => {
        this.totalProduct = res;
      }
    })
  }

  onFilterChanged(selectedFilters: any) {
    console.log("selected ",selectedFilters);
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
    Object.keys(selectedFilters).forEach((element : any) => {
      if (element && element !== 'price' && selectedFilters[element].length && !selectedFilters[element].includes(`All ${element.charAt(0).toUpperCase() + element.slice(1)}`)) {
        selectedFilters[element].forEach((item : any,index : any) => {
            this.params[element+`[${index}]`] = item
        });      
      }
    });
    this.getProductList(this.params);
   
  }

  onSelectFilterChecked(title: any, event: any) { }
  
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  getProductList(params:any) {
    
    this.productService.getProductList(params).subscribe({
      next: (res: any) => {
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
      }
    })
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

  changePageOfProduct(page:any){
    this.params = {
      ...this.params,
      page: this.page,
      items:this.pageSize
    }
    this.page=page;
    this.getProductList(this.params);
  }
}
