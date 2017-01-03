import { Directive, ElementRef, HostListener } from '@angular/core';
const CURSOR_STYLES = [
  'http://www.w3schools.com/cssref/smiley.gif',
  'http://www.rw-designer.com/cursor-extern.php?id=76012',
  'http://www.rw-designer.com/cursor-extern.php?id=76021',
  'pointer'
];
@Directive({
  selector: '[appPointerHover]'
})
export class PointerHoverDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.style.cursor = this._getRandomPointerStyle();
  }

  private _getRandomPointerStyle() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let random = getRandomInt(0, CURSOR_STYLES.length - 1);
    let cursor = CURSOR_STYLES[random];
    if (!cursor.includes('www')) {
      return cursor;
    }
    return `url(${cursor}),auto`;
  }
}
