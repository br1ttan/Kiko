import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    HttpClientModule,
    FeaturesModule,
    SharedModule
  ],
})
export class DashboardModule { }
