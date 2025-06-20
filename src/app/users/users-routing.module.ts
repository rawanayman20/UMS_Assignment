import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [{ path: '', component: UsersComponent ,
  children:[{ path: '', redirectTo:'list',pathMatch:'full' },
    { path: 'add', component:AddEditUserComponent },
  { path: 'edit/:id', component: AddEditUserComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'delete/:id', component: DeleteUserComponent },
  { path: 'list', component: ListUsersComponent }]
  

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
