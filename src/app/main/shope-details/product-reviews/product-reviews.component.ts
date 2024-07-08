import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/shared/service/common.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbModule],
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  reviewList = {
    _id: '667a93516a95e65e828409cc',
    productName: 'Nike Running Shoes',

    reviews: [
      {
        user_profile_pic: 'assets/img/user.jpg',
        firstName: 'Dhruv',
        lastName: 'Joshi',
        reviewMessage:
          'Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.',
        reviewRating: 4,
        reviewDate: '01/01/2045',
      },
      {
        user_profile_pic: 'assets/img/user.jpg',
        firstName: 'Vishal',
        lastName: 'Joshi',
        reviewMessage:
          'Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.',
        reviewRating: 2,
        reviewDate: '01/01/20',
      },
    ],
  };
  reviewForm:any;
  productId:any;
  submitted:any;

  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private cd:ChangeDetectorRef,
    private  userService:UserService,
  ) {}

  ngOnInit(): void {
    this.inititalizeReviewForm();
    this.getParams()
  }
  inititalizeReviewForm(){
    this.reviewForm=new FormGroup({
      rating:new FormControl(''),
      review:new FormControl('')
    })
  }

  getParams(){
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res,'params of shop')
          this.productId = res.id;
          this.cd.markForCheck();
        },
      });
  }
  onSubmitReview(){
    this.submitted=true;
    if(this.reviewForm.valid){
      console.log(this.reviewForm.value);
      console.log("id",this.productId)
      this.userService.addReview(this.reviewForm.value,this.productId).subscribe({
        next:(res:any)=>{
          console.log(res,'review')
        }
      })
    }
  }
}
