import { NgModule } from '@angular/core';
import { JewelryComponent } from './jewelry.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: JewelryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JewelryRouting { }
