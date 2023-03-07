import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from './products.actions';
import { switchMap, map } from 'rxjs';
import { ProductsService } from '../service/products.service';
@Injectable()
export class ProductEffects {
  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.product),
      switchMap(() =>
        this.productService
          .getProducts()
          .pipe(
            map((product: any) =>
              ProductActions.product_success({ product })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private productService: ProductsService // we will need this service for API calls
  ) {}
}
