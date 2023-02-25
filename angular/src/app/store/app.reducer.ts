import { User } from '../auth/models/user.model';
import {
  ShoppingBasketActionsType,
} from './app.actions';

export interface ShoppingBasketState {
  userDetails: User;
}

export const ShoppingBasketInitialState = {
  userDetails: {
    name: '',
    email: '',
  },
};

export function ShoppingBasketReducer(
  state: ShoppingBasketState = ShoppingBasketInitialState,
  action: ShoppingBasketActionsType
): ShoppingBasketState {
  switch (action.type) {
    default: {
     return state;
    }
  }
}
