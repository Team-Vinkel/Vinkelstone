import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownCursivePipe } from './markdown-cursive.pipe';
import { MarkdownBoldPipe } from './markdown-bold.pipe';
import { WordfilterPipe } from './wordfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    MarkdownBoldPipe,
    MarkdownCursivePipe,
    WordfilterPipe
  ],
  exports: [
    MarkdownBoldPipe,
    MarkdownCursivePipe,
    WordfilterPipe
  ]
})
export class PipesModule { }
