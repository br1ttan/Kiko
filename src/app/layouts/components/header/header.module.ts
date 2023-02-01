import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionButtonsComponent, AuthDialogComponent, CartCardComponent, CartDialogComponent, LoginComponent, RegistrationComponent, SearchComponent } from './components';
import { UserDropdownComponent } from './components/action-buttons/user-dropdown/user-dropdown.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        AuthDialogComponent,
        LoginComponent,
        RegistrationComponent,
        ActionButtonsComponent,
        CartDialogComponent,
        CartCardComponent,
        UserDropdownComponent
    ],
    imports: [
        FeaturesModule,
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        HeaderComponent
    ],
})
export class HeaderModule { }
