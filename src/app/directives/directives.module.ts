import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardHighlightDirective } from './card-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardHighlightDirective],
  exports: [ CardHighlightDirective ]
})
export class DirectivesModule { }
