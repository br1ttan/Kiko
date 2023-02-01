import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackPaginatorComponent } from './back-paginator.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BackPaginatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BackPaginatorComponent
  ]
})
export class BackPaginatorModule { }
