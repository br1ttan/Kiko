import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensContainerComponent } from './womens-container.component';

const routes: Routes = [
  {path: '', component: WomensContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WomensContainerRouting { }
