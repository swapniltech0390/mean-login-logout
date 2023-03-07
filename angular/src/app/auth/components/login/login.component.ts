import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable,throwError } from 'rxjs';
import { AuthActions } from '../../store/auth.actions';
import { AuthState, isLoggedError} from '../../store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  isLoggedIn = false;
  isInvalid = false;
  @ViewChild('form') form:any;

  constructor(
    private store: Store<AuthState>
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.store.dispatch(AuthActions.login(this.loginForm.value));
    this.store
      .select(isLoggedError)
      .subscribe((error) => this.catchSignUpError(error));
  }
  catchSignUpError(error: any): Observable<Response> {
    if (error?.status === 406) {
      this.isLoggedIn = true;
    } else if (error?.status === 401) {
      this.isInvalid = true;
    }
    this.form.resetForm();
    return throwError(error);
  }
}
