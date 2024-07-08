import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetImageDimension]',
  standalone: true,
})
export class SetImageDimensionDirective implements OnInit {
  @Input() appFitImage!: string; // Input to specify image URL

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'object-fit', 'cover');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');

    if (this.appFitImage) {
      this.el.nativeElement.src = this.appFitImage;
    } else {
      this.el.nativeElement.src = '../../../assets/img/not-image-found.jpg';
    }
  }
}
