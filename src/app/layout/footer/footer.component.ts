import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { FOOTER_NAVIGATION } from 'src/app/shared/constant/common.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  navigationList = FOOTER_NAVIGATION;
  siteInfo: any;
  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) { }
  
  /**
   * Set Website Config Data
   */
  ngOnInit(): void {
    this.setSiteConfig();
  }
  
  setSiteConfig() {
    this.commonService.getSiteConfig().subscribe({
      next: (res: any) => {
        this.siteInfo = res.data;
        this.commonService.siteConfig$.next(res.data);
        this.cdr.markForCheck();
      },
    });
  }
}
