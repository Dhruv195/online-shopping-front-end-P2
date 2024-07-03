import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetImageDimension]',
  standalone: true
})
export class SetImageDimensionDirective implements OnInit {

  constructor(public elementRef:ElementRef,public renderer:Renderer2) { }

  ngOnInit(): void {
    this.setImageDimension()
  }
  setImageDimension() {
    this.renderer.setStyle(this.elementRef.nativeElement,'width','200px')
    this.renderer.setStyle(this.elementRef.nativeElement,'height','900px')
  }


}
