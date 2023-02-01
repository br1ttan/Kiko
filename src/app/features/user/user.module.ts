import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    UserButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserButtonComponent
  ]
})
export class UserModule { }
