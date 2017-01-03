import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardHighlightDirective } from './card-highlight.directive';
import { PointerHoverDirective } from './pointer-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardHighlightDirective, PointerHoverDirective],
  exports: [ CardHighlightDirective, PointerHoverDirective ]
})
export class DirectivesModule { }
