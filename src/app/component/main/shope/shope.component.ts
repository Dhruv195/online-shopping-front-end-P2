import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ProdcutCardComponent } from 'src/app/shared/common/prodcut-card/prodcut-card.component';
import { ProductListViewComponent } from 'src/app/shared/common/product-list-view/product-list-view.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shope',
  standalone: true,
  imports: [CommonModule, ProdcutCardComponent,ProductListViewComponent,NgbModule],
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
  pageSize=10;
  page = 1;
  totalProduct:any

  productList:any;
  displayMode: string = 'grid';
  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    public productService:ProductService
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

    console.log(this.categoryId);
    this.getProductList()
  }
  onDisplayModeChange(mode: string) {
    this.displayMode = mode;
  }
  getProductList()
  {
    this.productService.getProductList(this.page,this.pageSize).subscribe({
      next: (res: any) => {
        console.log(res);
        
        this.productList = res.data.products;
        this.totalProduct = res.data.total_count
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
