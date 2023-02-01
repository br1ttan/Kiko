import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsContainerComponent } from './electronics-container.component';

const routes: Routes = [
  {path: '', component: ElectronicsContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ElectronicsContainerRouting { }
