import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateCardComponent } from './create-card.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { CreateSpellComponent } from './create-spell/create-spell.component';
import { CreateMinionComponent } from './create-minion/create-minion.component';
import { CreateHeroPowerComponent } from './create-hero-power/create-hero-power.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ CreateHeroPowerComponent, CreateMinionComponent, CreateSpellComponent, CreateWeaponComponent, CreateCardComponent]
})
export class CreateCardModule { }
