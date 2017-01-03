import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOwnProfileModule } from './user-own-profile/user-own-profile.module';
import { OtherUserProfileModule } from './other-user-profile/other-user-profile.module';

import { UserService } from './shared/users.service';

@NgModule({
  imports: [
    CommonModule,
    OtherUserProfileModule,
    UserOwnProfileModule
  ],
  declarations: [],
  providers: [UserService],
  exports: [
    OtherUserProfileModule,
    UserOwnProfileModule
  ]
})
export class ProfilesModule { }
