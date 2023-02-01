import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchResolver } from './search.resolver';

const routes: Routes = [
  {path: '', component: SearchComponent, resolve: {
    products: SearchResolver,
  }}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRouting { }
