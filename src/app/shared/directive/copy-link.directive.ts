import { Directive, HostListener, Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { TOAST_TYPE } from '../constant/toast';

@Directive({
  selector: '[appCopyLink]',
  standalone: true
})
export class CopyLinkDirective {
  @Input() copyLink: any;
  constructor(private commonService:CommonService) { }
/**
 * CLick to Product Link Copy
 * @param event click event
 * @returns 
 */
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {

    event.preventDefault();
    if (!this.copyLink) {
      return;
    }
    /**
     * clipboard to copyLink String
     */
    navigator.clipboard.writeText(this.copyLink.toString());
    this.commonService.showToastMessage(TOAST_TYPE.success, 'Copy Product Link Successfully');
    
  }
}
