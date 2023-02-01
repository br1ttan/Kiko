import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesEnum } from '@core';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '', 
    component: DetailsComponent,
    children: [
      {
        path: CategoriesEnum.Jewelery,
        loadChildren: () => import('./containers/jewelery-container')
          .then((m) => m.JeweleryContainerModule)
      },
      {
        path: `${CategoriesEnum.Jewelery}/:id`,
        loadChildren: () => import('../../pages/categories/jewelery')
          .then((m) => m.JeweleryModule)
      },
      {
        path: CategoriesEnum.Electronics,
        loadChildren: () => import('./containers/electronics-container')
          .then((m) => m.ElectronicsContainerModule)
      },
      {
        path: `${CategoriesEnum.Electronics}/:id`,
        loadChildren: () => import('../../pages/categories/electronics')
          .then((m) => m.ElectronicsModule)
      },
      {
        path: CategoriesEnum.Mens,
        loadChildren: () => import('./containers/mens-container')
          .then((m) => m.MensContainerModule)
      },
      {
        path: `${CategoriesEnum.Mens}/:id`,
        loadChildren: () => import('../../pages/categories/mens')
          .then((m) => m.MensModule)
      },
      {
        path: CategoriesEnum.Womens,
        loadChildren: () => import('./containers/womens-container')
          .then((m) => m.WomensContainerModule)
      },
      {
        path: `${CategoriesEnum.Womens}/:id`,
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
