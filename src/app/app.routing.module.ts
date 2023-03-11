import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum, CheckoutPageGuard, QueryRouteEnum } from '@core';
import { MainLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
       path: AppRouteEnum.Dashboard,
       loadChildren: () => import('./pages/dashboard')
        .then((m) => m.DashboardModule) 
      },
      {
        path: `${AppRouteEnum.Search}${QueryRouteEnum.Id}`,
        loadChildren: () => import('./pages/search')
        .then((m) => m.SearchModule)
      },
      {
        path: AppRouteEnum.Checkout,
        canActivate: [CheckoutPageGuard],
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
