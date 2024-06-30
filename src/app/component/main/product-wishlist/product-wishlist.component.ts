import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-wishlist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.scss']
})
export class ProductWishlistComponent  {
  productWishList: any;

  someAddedWishList=[
    {
      name:'Product Name',
      price:150,
      total:150,
      img: 'assets/img/product-1.jpg',
      description:"Lorem asdfalsfjsf aslkdfjlaks fasdfl  asdf sdjkkla"
    },
    {
      name:'Product Name',
      price:150,
      total:150,
      img: 'assets/img/product-1.jpg',
      description:"Lorem asdfalsfjsf aslkdfjlaks fasdfl  asdf sdjkkla"
      
    },
    {
      name:'Product Name',
      price:150,
      total:150,
      img:'assets/img/product-1.jpg',
      description:"Lorem asdfalsfjsf aslkdfjlaks fasdfl  asdf sdjkkla"
      
    }
  ]
  constructor(public commonService:CommonService){}

  ngOnInit(): void {
    this.changeBreadCrumbData();

    this.productWishList= this.getLocalStorage('productWishList');
    if(this.productWishList==undefined){
      this.productWishList=this.someAddedWishList;
      this.setLocalStorage('productWishList',this.productWishList);
    }
    this.commonService.totalWishListItem$.next(this.productWishList.length);

  }
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Wis List',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Wis List', link: '/wish-list' },
      ]
    });
  }

  setLocalStorage(typeOfString:any,storeData:any) {
    localStorage.setItem(typeOfString, JSON.stringify(storeData));
  }
  getLocalStorage(typeOfString:any) { 
    let localStorageData = localStorage.getItem(typeOfString);
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }
  }
  deleteProductInWishList(index: any) {
    this.productWishList.splice(index, 1);
    this.setLocalStorage('productWishList', this.productWishList);
    this.commonService.totalWishListItem$.next(this.productWishList.length);
  }
}
