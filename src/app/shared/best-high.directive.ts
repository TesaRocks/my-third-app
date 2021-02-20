import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBestHigh]',
})
export class BestHighDirective {
  @HostBinding('style.color') color: string = 'black';
  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elref.nativeElement,
      'backgroundColor',
      '#ebdb34'
    );
    this.color = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elref.nativeElement,
      'backgroundColor',
      '#e6b7ed'
    );
    this.color = 'blue';
  }
}
