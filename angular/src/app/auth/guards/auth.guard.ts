import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { isLoggedIn } from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.pipe(select(isLoggedIn),
    tap(loggedIn=> {
        if(!loggedIn)
        this.router.navigateByUrl('/login');
    }));
  }
}
