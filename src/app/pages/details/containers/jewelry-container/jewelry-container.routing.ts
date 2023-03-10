import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewelryContainerComponent } from './jewelry-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: JewelryContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JewelryContainerRouting { }
