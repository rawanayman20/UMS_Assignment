import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: AuthComponent }];


@NgModule({
   declarations: [AuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AuthModule { }
