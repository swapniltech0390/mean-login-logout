import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
  isAuth: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  user: undefined!,
  isAuth: false,
  error: undefined!
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login_success, (state, action) => {
    return {
      ...state,
      user: action.user,
      isAuth: action.isAuth,
      error: undefined,
    };
  }),
  on(AuthActions.login_failed, (state, action) => {
    return {
      ...initialAuthState,
      error: action,
    };
  }),
  on(AuthActions.signup_failed, (state, action) => {
    return {
      ...initialAuthState,
      error: action,
    };
  }),
  on(AuthActions.logout, () => {
    return {
      ...initialAuthState,
    };
  })
);
