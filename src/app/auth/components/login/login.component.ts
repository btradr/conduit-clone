import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, backendErrorsSelector } from '../../store/selectors/auth.selector';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface>;

  public constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.loginForm.value
    };

    this.store.dispatch(loginAction({ request: request }));
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
