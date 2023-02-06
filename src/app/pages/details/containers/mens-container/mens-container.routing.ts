import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensContainerComponent } from './mens-container.component';

const routes: Routes = [
  {path: '', component: MensContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MensContainerRouting { }
