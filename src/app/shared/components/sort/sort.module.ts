import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SortComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    SortComponent
  ]
})
export class SortModule { }
