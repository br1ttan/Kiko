import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeweleryContainerComponent } from './jewelery-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: JeweleryContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JeweleryContainerRouting { }
