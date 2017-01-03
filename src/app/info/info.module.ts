import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  declarations: [ FaqComponent, AboutComponent]
})
export class InfoModule { }
