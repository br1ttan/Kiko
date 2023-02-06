import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum, CheckoutGuard } from '@core';
import { MainLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
       path: '',
       loadChildren: () => import('./pages/dashboard')
        .then((m) => m.DashboardModule) 
      },
      {
        path: `${AppRouteEnum.Search}/:id`,
        loadChildren: () => import('./pages/search')
        .then((m) => m.SearchModule)
      },
      {
        path: `${AppRouteEnum.Checkout}`,
        canActivate: [CheckoutGuard],
        loadChildren: () => import('./pages/checkout')
        .then((m) => m.CheckoutModule)
      },
      {
       path: AppRouteEnum.Details,
       loadChildren: () => import('./pages/details')
         .then((m) => m.DetailsModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
