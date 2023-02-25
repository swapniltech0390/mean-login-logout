import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export enum AuthAction {
  LOGIN = '[Login Page] login to App',
  LOGIN_SUCCESS = '[Login Page] login to App Success',
  LOGIN_FAILED = '[Login Page] login to App Failed',
  SIGNUP = '[SIGNUP Page] Signup to App',
  SIGNUP_SUCCESS = '[SIGNUP Page] Signup to App Success',
  SIGNUP_FAILED = '[SIGNUP Page] Signup to App Failed',
  LOGOUT = '[LOGOUT Page] Logout to App',
  LOGOUT_SUCCESS = '[LOGOUT Page] Logout to App Success',
  LOGOUT_FAILED = '[LOGOUT Page] Logout to App Failed',
}

const login = createAction(
  AuthAction.LOGIN,
  props<{ email:string,password:string }>()
);

const login_success = createAction(
  AuthAction.LOGIN_SUCCESS,
  props<{ user: User; isAuth: boolean }>()
);

const login_failed = createAction(
  AuthAction.LOGIN_FAILED,
  props<{ error: any}>()
);

const signup = createAction(
  AuthAction.SIGNUP,
  props<{ user: User }>()
);

const signup_success = createAction(
  AuthAction.SIGNUP_SUCCESS,
  props<{ user: User; success: boolean }>()
);

const signup_failed = createAction(
  AuthAction.SIGNUP_FAILED,
  props<{ error: any }>()
);

const logout = createAction(
  AuthAction.LOGOUT
);

const logout_success = createAction(AuthAction.LOGOUT_SUCCESS);

const logout_failed = createAction(
  AuthAction.LOGIN_FAILED,
  props<{ error: any }>()
);

export const AuthActions = {
  login,
  login_success,
  login_failed,
  signup,
  signup_success,
  signup_failed,
  logout,
  logout_success,
  logout_failed
};
