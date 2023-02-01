import { NgModule } from '@angular/core';
import { JeweleryComponent } from './jewelery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: JeweleryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JeweleryRouting { }
