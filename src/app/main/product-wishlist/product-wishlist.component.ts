import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-product-wishlist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductWishlistComponent  {
  productWishList: any;
  productId:any;

 
  constructor(private commonService:CommonService,private userService:UserService,private acitveRoute:ActivatedRoute,private cd:ChangeDetectorRef){}

  /**
   * change Bread Crumb Data
   * get Params to product Id 
   * 
   * if Product Id is udefined than simple Wish List API Call
   */
  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.getParams();
    if(this.productId==undefined){
      this.getWishList();
    }
  }
  /**
   * Behaviour Subject using BreadCrumb Data
   */
  changeBreadCrumbData() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Wis List',
      linkList: [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Wish List', link: '/wish-list' },
      ]
    });
  }

  /**
   * prams to fetch Product Id 
   * if Product Id than AddProductInWishList API Call
   * err to productId null
   */
  getParams(){
    this.acitveRoute.params.subscribe({
      next:(res:any)=>{
        this.productId=res.id;
        if(this.productId){
          this.addProductInWishList();
        }
        this.cd.markForCheck();
      },
      error:(err:any)=>{
        this.productId=null;
      }
    })
  }
  
  /**
   * Get Wish List API CALL
   * if Error to Emptu PRoduct List
   */
  getWishList(){
    this.userService.getWishList().subscribe({
      next:(res:any)=>{
        this.productWishList=res.data.products;
        this.cd.markForCheck();
      },
      error:(err:any)=>{
        this.productWishList=[];
      }
    })
  }
  /**
   * Add Product In Wish List
   */
  addProductInWishList(){
    this.userService.postWishList(this.productId).subscribe({
      next:(res:any)=>{
        this.getWishList();
        
        this.cd.markForCheck();
      },
      error:(err:any)=>{}
    })
  }
  /**
   * wish List to remove product using API Call 
   * @param productId delete Product Id
   */
  deleteProductInWishList(productId:any){
    this.userService.deleteWishList(productId).subscribe({
      next:(res:any)=>{
        this.getWishList();
        this.cd.markForCheck();
      },
      error:(err:any)=>{}
    })

  }
  
}
