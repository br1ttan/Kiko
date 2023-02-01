import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IProduct, ProductByKeyPhrase } from '@features';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResolver implements Resolve<IProduct[]> {
  constructor(
    private readonly sortedProductByPhrase: ProductByKeyPhrase
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this.sortedProductByPhrase.getByPhrase(route.params['id']);
  }
}
