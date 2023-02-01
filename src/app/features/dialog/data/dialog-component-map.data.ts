import { Type } from '@angular/core';
import { AuthDialogComponent, CartDialogComponent } from '@layouts/components';
import { DialogComponentEnum } from '../enums';

export const DIALOG_COMPONENT_MAP = new Map<DialogComponentEnum, Type<unknown>>([
    [DialogComponentEnum.Auth, AuthDialogComponent],
    [DialogComponentEnum.Cart, CartDialogComponent],
]);
