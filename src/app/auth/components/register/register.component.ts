import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector, backendErrorsSelector } from '../../store/selectors/register.selector';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  public constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.registerForm.value
    };

    this.store.dispatch(registerAction({ request: request }));
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
  }

  private initializeForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
