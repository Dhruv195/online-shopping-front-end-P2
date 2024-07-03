import { Component, OnInit } from '@angular/core';
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
export class ShopeComponent implements OnInit {
  filters = [
    {
      filter_type: 'FILTER BY PRICE',
      filter_items: [
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
      filter_type: 'FILTER BY COLOR',
      filter_items: [
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
      filter_type: 'FILTER BY SIZE',
      filter_items: [
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
  products = [
    {
      image: 'assets/img/product-1.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-2.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-3.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-4.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-1.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-2.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-3.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-4.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-1.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-2.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-3.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-4.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-1.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-2.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-3.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },
    {
      image: 'assets/img/product-4.jpg',
      links: {
        cart: '#',
        wishlist: '#',
        compare: '#',
        view: '#',
      },
      name: 'Product Name Goes Here',
      price: '123.00',
      oldPrice: '123.00',
      rating: 5,
      reviews: 99,
    },

    // Add more products as needed
  ];
  filterItemsList= [
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
  ]
  filterForm: any;
  pageSize=10;
  page = 1;
  totalProduct: any;
  params: any;

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
    this.initializeSelectedFilterForm();
    this.getProductList();
    ////////////////////
    // this.getAllFilterItem()
  }
  //*********************** */
  onFilterChanged(selectedFilters: any) {
    console.log('Selected Filters:', selectedFilters);
    
    // Apply the selected filters to your API call
    const params = this.buildFilterParams(selectedFilters);
    console.log("prams filter ",params)
    // this.fetchFilteredData(params);
    const apiUrl = this.constructApiUrl(params);
    console.log("API URL:", apiUrl);
  }
  // buildFilterParams(filters: any) {
  //   let params: any = {};
  //   for (let key in filters) {
  //     if (filters[key].length > 0) {
  //       params[key] = filters[key].join(',');
  //     }
  //   }
  //   return params;
  // }

  buildFilterParams(filters: any) {
    let params: any = {};
    for (let key in filters) {
      if (filters[key].length > 0) {
        params[key.toLowerCase().replace(' ', '')] = filters[key].join(',');
      }
    }
    return params;
  }
  constructApiUrl(params: any) {
    const baseUrl = '{{URL}}/product/list';
    const queryParams = new URLSearchParams(params).toString();
    return `${baseUrl}?${queryParams}`;
  }
















  //******************************************** */
  ////////////
  initializeSelectedFilterForm() {
    this.filterForm = new FormGroup({
      filterItemArray: new FormArray([]),
    });
  }
  ////////////////
  get filterFormArray(): any{
    return this.filterForm.get('filterItemArray') as FormArray<any>
  }
  ///////////////
  getAllFilterItem() {
    this.filterItemsList.forEach((element: any) => {
      this.filterFormArray.push(this.preparedFilterControl())
    })
  }
  /////////////
  getControls() {
    this.filterForm.controls;
  }
  preparedFilterControl(toPatchData: any = {}) {
    const filterControl = new FormGroup({
      checked: new FormControl(false),
    });
    // if (toPatchData) {
    //   hobbyControl.patchValue(toPatchData);
    // }
    return filterControl;
  }



  onSelectFilterChecked(title:any,event:any) {
    console.log("Chacjked ",title)
    console.log("Chacjked ",event)
  }
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  getProductList() {
    
    this.params = {
      page: this.page,
      items:this.pageSize
    }

    this.productService.getProductList(this.params).subscribe({
      next: (res: any) => {
        this.productList = res.data.products;
        this.totalProduct = res.data.total_count;
        this.router.navigate(
          ['/shop'],
          {
            queryParams: this.params,
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
    // console.log("Page ",this.page);
    this.page=page;
    this.getProductList();
  }
}
