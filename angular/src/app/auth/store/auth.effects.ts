import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/auth-service.service';
import { AuthActions } from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginResponse, SignupResponse } from '../models/user.model';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login({ email, password }).pipe(
          tap(() => this.router.navigateByUrl('/home')),
          map((resp: LoginResponse) =>
            AuthActions.login_success({
              isAuth: resp.isAuth,
              user: resp.user,
            })
          ),
          catchError((error) => of(AuthActions.login_failed(error)))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      switchMap(({ user }) =>
        this.authService.signUp(user).pipe(
          tap(() => this.router.navigateByUrl('/')),
          map((resp: SignupResponse) =>
            AuthActions.signup_success({
              success: resp.success,
              user: resp.user,
            })
          ),
          catchError((error) => of(AuthActions.signup_failed(error)))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() =>
        this.authService.logout().pipe(
          tap(() => this.router.navigateByUrl('')),
          map(() =>
            {
              return AuthActions.logout_success();
            }
          ),
          catchError((error) => of(AuthActions.logout_failed(error)))
        )
      )
    )
  );
  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private authService: AuthService, // we will need this service for API calls
    private router: Router
  ) {}
}