import { Directive, ElementRef, HostListener } from '@angular/core';

const CARD_BACKS = [
  'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/thumb/1/1a/Card_back-Classic.png/200px-Card_back-Classic.png',
  'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/thumb/3/37/Card_back-Gnomes.png/200px-Card_back-Gnomes.png',
  'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/thumb/6/66/Card_back-Legend.png/200px-Card_back-Legend.png',
  'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/thumb/1/1d/Card_back-Maraad.png/200px-Card_back-Maraad.png',
  'http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-alleria-windrunner-201x300.png',
  'http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-gold-open-202x300.png'



];

@Directive({
  selector: '[appDeckHover]'
})
export class DeckHoverDirective {

  private _oldPictureUrl: string;
  private _cardBackUrl: string;

  constructor(private _element: ElementRef) {
    this._cardBackUrl = this._getRandomCardBack();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._oldPictureUrl = this._element.nativeElement.src.substr(0);
    this._element.nativeElement.src = this._cardBackUrl;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._element.nativeElement.src = this._oldPictureUrl;
  }

  private _getRandomCardBack() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let random = getRandomInt(0, CARD_BACKS.length - 1);
    let cardBackUrl = CARD_BACKS[random];
    return cardBackUrl;
  }
}
