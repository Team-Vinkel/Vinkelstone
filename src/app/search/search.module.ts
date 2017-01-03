import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';

import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    RouterModule
  ],
  declarations: [ SearchUserComponent]
})
export class SearchModule { }
