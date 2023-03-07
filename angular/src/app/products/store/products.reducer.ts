import { createReducer, on } from '@ngrx/store';
import { ProductActions } from './products.actions';

export const productFeatureKey = 'products';

export interface ProductState {
  product: any;
}

export const initialProductState: ProductState = {
  product: {},
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.product_success, (state, action) => {
    return {
      ...state,
      product: action.product,
    };
  }),
  on(ProductActions.product_failed, (state, action) => {
    return {
      ...initialProductState,
      error: action,
    };
  })
);
