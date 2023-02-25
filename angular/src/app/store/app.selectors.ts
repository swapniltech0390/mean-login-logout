import { InjectionToken } from "@angular/core";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../auth/models/user.model";
import { ShoppingBasketState } from "./app.reducer";


export const appKey = 'app';
export const SHOPPPING_BASKET_INJECTION_TOKEN = new InjectionToken<
  ActionReducerMap<ShoppingBasketState>
>('app');
export const getState = createFeatureSelector<ShoppingBasketState>(appKey);

export const getUserDetials = createSelector(getState, (state): User => {
  return state && state.userDetails;
});
