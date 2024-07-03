import { AfterContentInit, ContentChild, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective  {
  @ContentChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.querySelector('.dropdown-toggle').click();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.querySelector('.dropdown-toggle').click();
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.renderer.addClass(this.el.nativeElement, 'show');
  //   if (this.dropdownMenu) {
  //     this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  //   }
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.renderer.removeClass(this.el.nativeElement, 'show');
  //   if (this.dropdownMenu) {
  //     this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  //   }
  // }
}
