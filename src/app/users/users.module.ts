import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from "../shared/shared.module";
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddEditUserComponent,
    DeleteUserComponent,
    ProfileComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
    
]
})
export class UsersModule { }
