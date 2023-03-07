import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';
import { AuthState } from '../../auth/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const isLoggedIn = createSelector(
  selectAuthState,
  (state) => state.isAuth
);
export const isLoggedError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const productList = createSelector(
  selectProductState,
  (state) => state.product
);
export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
