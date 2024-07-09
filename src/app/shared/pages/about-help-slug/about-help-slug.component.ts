import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-help-slug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-help-slug.component.html',
  styleUrl: './about-help-slug.component.scss'
})
export class AboutHelpSlugComponent implements OnInit {
  typeOfInformation: any;
  // informationData: any;
  constructor(private commonService:CommonService,private activeRoute:ActivatedRoute,private router:Router){}
  aboutData={
        shortDescription: "help",
        longDescription: "help",
        title: "help",
        image: 'assets/img/carousel-1.jpg',
    }
    informationData={
        shortDescription: "help lorem afsdkf sf alkjjdf alkjfd askjdf safj",
        longDescription: "help kfdjsls asfjk adkj aflk asdfjlksfj s sdfkj adlkj afjkl adjfkkjkjd djjjjff fffffffffffad",
        title: "help",
        image: 'assets/img/carousel-2.jpg',
    }
  ngOnInit(): void {
    this.typeOfInformation = this.router.url;
    // this.getHelpAndAboutInformation()

  }


  getHelpAndAboutInformation() {
    this.commonService.getHelpAndAboutInformation(this.typeOfInformation).subscribe({
      next: (res: any) => {
        console.log("help and contact ",res)
      }
    })
  }
}
