import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const productList = createSelector(
  selectProductState,
  (state) => state.product
);
