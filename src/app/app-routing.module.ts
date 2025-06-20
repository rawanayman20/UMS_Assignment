import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [{path:'',redirectTo:'auth',pathMatch:'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canActivate:[authGuard]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
