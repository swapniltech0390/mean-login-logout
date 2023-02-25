import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(selectAuthState, (state) => state.isAuth);
export const isLoggedError = createSelector(selectAuthState, (state) => state.error);

export const user = createSelector(
  selectAuthState,
  (state) => state.user
);
export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
