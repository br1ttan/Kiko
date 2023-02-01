import { InjectionToken } from '@angular/core';

export const storageToken = new InjectionToken('storageToken', {
    providedIn: 'root',
    factory: () => localStorage
});
