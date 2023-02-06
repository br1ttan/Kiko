import { NgModule } from '@angular/core';
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
