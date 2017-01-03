import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  private _oldPictureUrl: string;

  constructor(private _element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._oldPictureUrl = this._element.nativeElement.src.substr(0);
    this._element.nativeElement.src = 'http://www.culver.edu/Assets/Images/Icons/moreinfo-01%20(1).png';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._element.nativeElement.src = this._oldPictureUrl;
  }
}
