import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { SetImageDimensionDirective } from 'src/app/shared/directive/set-image-dimension.directive';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbModule,],
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  reviewList: any;
  reviewForm:any;
  productId:any;
  submitted:any;

  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private cd:ChangeDetectorRef,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.inititalizeReviewForm();
    this.getParams();
    this.getTotalReviewList(this.productId);
  }
  inititalizeReviewForm(){
    this.reviewForm=new FormGroup({
      rating:new FormControl(''),
      review:new FormControl('')
    })
  }

  getParams(){
    this.activatedRoute.parent?.params.subscribe({
      next: (res: any) => {
        this.productId = res.id;
        },
      });
  }
  onSubmitReview(){
    this.submitted=true;
    if(this.reviewForm.valid){
      this.userService.addReview(this.reviewForm.value,this.productId).subscribe({
        next:(res:any)=>{
          this.getTotalReviewList(this.productId);
        }
      })
    }
  }

  getTotalReviewList(productId:any) {
    this.userService.getReviewList(productId).subscribe({
      next: (res: any) => {
        this.reviewList = res.data;
      }
    })
  }
}
