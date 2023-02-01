import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main/main.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class LayoutsModule { }
