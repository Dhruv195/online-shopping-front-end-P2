import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  cartProductList:any;
  @Output() subTotalChanged = new EventEmitter<number>();
  someAddedCart=[
    {
      name:'Product Name',
      price:150,
      quantity:1,
      total:150,
      img:'assets/img/product-1.jpg'
    },
    {
      name:'Product Name',
      price:150,
      quantity:1,
      total:150,
      img:'assets/img/product-1.jpg'
    },
    {
      name:'Product Name',
      price:150,
      quantity:1,
      total:150,
      img:'assets/img/product-1.jpg'
    }
  ]

  ngOnInit(): void {
    this.cartProductList= this.getLocalStorage('cartProductList');
    if(this.cartProductList==undefined){
      this.cartProductList=this.someAddedCart;
      this.setLocalStorage('cartProductList',this.cartProductList);
    }
    this.calculateSubTotal();
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
 
  quantityMinus(product:any){
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.updateTotal(product);
    }
    this.calculateSubTotal();
  }
  quantityPlus(product:any){
    product.quantity += 1;
    this.updateTotal(product);
    this.calculateSubTotal();
  }
  updateTotal(product: any) {
    product.total = product.price * product.quantity;
  }
  deleteProduct(index:any){
    this.cartProductList.splice(index,1);
    this.setLocalStorage('cartProductList', this.cartProductList);
  }
  calculateSubTotal() {
    const subTotal = this.cartProductList.reduce((sum: number, product: any) => sum + (product.price * product.quantity), 0);
    this.subTotalChanged.emit(subTotal);
  }

}
