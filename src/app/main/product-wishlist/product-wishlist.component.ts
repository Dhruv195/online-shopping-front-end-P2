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

  ngOnInit(): void {
    this.changeBreadCrumbData();
    this.getParams();
    if(this.productId==undefined){
      this.getWishList();
    }
  }
  
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

  addProductInWishList(){
    this.userService.postWishList(this.productId).subscribe({
      next:(res:any)=>{
        this.getWishList();
        this.cd.markForCheck();
      },
      error:(err:any)=>{}
    })
  }

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
