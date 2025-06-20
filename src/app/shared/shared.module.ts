import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponent } from './shared/shared.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
 declarations: [SidebarComponent, SharedComponent,NavbarComponent],
  imports: [CommonModule, FormsModule, HttpClientModule,ReactiveFormsModule,ToastrModule,RouterModule ],
  exports: [SidebarComponent, FormsModule, HttpClientModule,ReactiveFormsModule,ToastrModule,NavbarComponent,RouterModule ]
})
export class SharedModule { }
