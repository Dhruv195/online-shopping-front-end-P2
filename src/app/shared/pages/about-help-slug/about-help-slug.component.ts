import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-help-slug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-help-slug.component.html',
  styleUrl: './about-help-slug.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AboutHelpSlugComponent implements OnInit {
  typeOfInformation: any;
  informationData: any;
  constructor(private commonService:CommonService,private cd:ChangeDetectorRef,private router:Router){}
  /**
   * Help and About API Call
   */
  ngOnInit(): void {
    this.typeOfInformation = this.router.url;
    this.getHelpAndAboutInformation();

  }


  getHelpAndAboutInformation() {
    this.commonService.getHelpAndAboutInformation(this.typeOfInformation).subscribe({
      next: (res: any) => {
        this.informationData = res.data;
        console.log("HELP and ABOUT ",this.informationData)
        this.cd.markForCheck()
      }
    })
  }
}
