import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CurrencyConversionToUAH, CutTitle } from './pipes';
import { BackPaginatorModule, LoaderModule, SortModule } from './components';
import { MatExpansionModule } from '@angular/material/expansion';
import { RatingModule } from './components/rating/rating.module';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    CurrencyConversionToUAH,
    CutTitle
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    LoaderModule,
    RatingModule,
    BackPaginatorModule,
    SortModule,
    CurrencyConversionToUAH,
    CutTitle
  ]
})
export class SharedModule { }
