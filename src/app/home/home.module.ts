import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
