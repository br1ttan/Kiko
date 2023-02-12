import { InjectionToken } from '@angular/core';

export const STORAGE_TOKEN = new InjectionToken('STORAGE_TOKEN', {
    providedIn: 'root',
    factory: () => localStorage
});
