import { Action } from '@ngrx/store';

export enum AuthAction {
  LOGIN = '[LOGIN] login to shopping basket',
  LOGIN_SUCCESS = '[LOGIN_SUCCESS] login to shopping basket success',
  LOGIN_FAILURE = '[LOGIN_FAILURE] login to shopping basket failed',
  SIGNUP = '[SIGNUP] signup to shopping basket',
  SIGNUP_SUCCESS = '[SIGNUP_SUCCESS] signup to shopping basket success',
  SIGNUP_FAILURE = '[SIGNUP_FAILURE] signup to shopping basket failed',
  
}

export class LoginUserAction implements Action {
  readonly type = AuthAction.LOGIN;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginUserSuccessAction implements Action {
  readonly type = AuthAction.LOGIN_SUCCESS;

  constructor(public payload: { name: string; email: string }) {}
}
export class LoginUserFailueAction implements Action {
  readonly type = AuthAction.LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class SignupUserAction implements Action {
  readonly type = AuthAction.SIGNUP;

  constructor(
    public payload: { name: string; email: string; password: string }
  ) {}
}

export class SignupUserSuccessAction implements Action {
  readonly type = AuthAction.SIGNUP_SUCCESS;

  constructor(public payload: any) {}
}
export class SignupUserFailueAction implements Action {
  readonly type = AuthAction.SIGNUP_FAILURE;

  constructor(public payload: any) {}
}
export type ShoppingBasketActionsType =
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserFailueAction
  | SignupUserAction
  | SignupUserSuccessAction
  | SignupUserFailueAction;
