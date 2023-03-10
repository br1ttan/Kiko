import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesEnum, QueryRouteEnum } from '@core';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '', 
    component: DetailsComponent,
    children: [
      {
        path: CategoriesEnum.Jewelry,
        loadChildren: () => import('./containers/jewelry-container')
          .then((m) => m.JewelryContainerModule)
      },
      {
        path: `${CategoriesEnum.Jewelry}${QueryRouteEnum.Id}`,
        loadChildren: () => import('../../pages/categories/jewelry')
          .then((m) => m.JewelryModule)
      },
      {
        path: CategoriesEnum.Electronics,
        loadChildren: () => import('./containers/electronics-container')
          .then((m) => m.ElectronicsContainerModule)
      },
      {
        path: `${CategoriesEnum.Electronics}${QueryRouteEnum.Id}`,
        loadChildren: () => import('../../pages/categories/electronics')
          .then((m) => m.ElectronicsModule)
      },
      {
        path: CategoriesEnum.Mens,
        loadChildren: () => import('./containers/mens-container')
          .then((m) => m.MensContainerModule)
      },
      {
        path: `${CategoriesEnum.Mens}${QueryRouteEnum.Id}`,
        loadChildren: () => import('../../pages/categories/mens')
          .then((m) => m.MensModule)
      },
      {
        path: CategoriesEnum.Womens,
        loadChildren: () => import('./containers/womens-container')
          .then((m) => m.WomensContainerModule)
      },
      {
        path: `${CategoriesEnum.Womens}${QueryRouteEnum.Id}`,
        loadChildren: () => import('../../pages/categories/womens')
          .then((m) => m.WomensModule)
      },
     ] 
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DetailsRouting { }
