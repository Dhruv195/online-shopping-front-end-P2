import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { NgbAccordionCollapse, NgbCollapse, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgbModule,CommonModule,RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  allCategory: any;
  categoryFaq: any;
  categoryType: any;
  params: any;
  
  constructor(private commonService:CommonService,private cd:ChangeDetectorRef,private router:Router){}

  ngOnInit(): void {
    this.getFAQData();
  }
  /**
   * getFaq using API
   */
  getFAQData() {
    this.commonService.getCategory().subscribe({
      next: (res: any)=>{
        this.allCategory = res.data.category;
        this.categoryType = this.allCategory[0].id;
        this.selectCategoryOfFaq(this.allCategory[0]._id);
        this.cd.markForCheck();
      }
    })
  }
  /**
   * selectedCategory on filter to fetch FAQ
   * @param category selected Category FAQ
   */
  selectCategoryOfFaq(categoryId: any) {
    this.categoryType = categoryId;
    this.params = {
      categoryId:categoryId
    }
    this.commonService.getCategoryOfFaq(categoryId).subscribe({
      next: (res: any) => {
        this.categoryFaq = res.data.faq;
        console.log("Category Faq",this.categoryFaq)
        this.cd.markForCheck();
      },
      error: (err: any) => {
      }
    })
    this.router.navigate(['faq'], {
      queryParams:this.params
    })
  }
  
}
