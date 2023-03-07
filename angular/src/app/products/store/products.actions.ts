import { createAction, props } from '@ngrx/store';

export enum ProductAction {
  PRODUCT = '[PRODUCT Page] Product to fetch',
  PRODUCT_SUCCESS = '[PRODUCT Page] Product Success',
  PRODUCT_FAILED = '[PRODUCT Page] Product Failed',
}

const product = createAction(ProductAction.PRODUCT);

const product_success = createAction(
  ProductAction.PRODUCT_SUCCESS,
  props<{ product: any }>()
);

const product_failed = createAction(
  ProductAction.PRODUCT_FAILED,
  props<{ error: any }>()
);

export const ProductActions = {
  product,
  product_success,
  product_failed,
};
