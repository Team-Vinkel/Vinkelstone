import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardHighlightDirective } from './card-highlight.directive';
import { PointerHoverDirective } from './pointer-hover.directive';
import { DeckHoverDirective } from './deck-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CardHighlightDirective, PointerHoverDirective, DeckHoverDirective ],
  exports: [ CardHighlightDirective, PointerHoverDirective, DeckHoverDirective ]
})
export class DirectivesModule { }
