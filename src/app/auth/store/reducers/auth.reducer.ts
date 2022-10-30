import { createReducer, on } from '@ngrx/store';

import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

import { AuthStateInterface } from '../../types/auth-state.interface';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  backendErrors: null
};

export const authReducer = createReducer(
  initialState,

  // register reducers
  on(
    registerAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (
      state: AuthStateInterface,
      action: { currentUser: CurrentUserInterface }
    ): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (
      state: AuthStateInterface,
      action: { errors: BackendErrorsInterface }
    ): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.errors
    })
  ),

  // login reducers
  on(
    loginAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (
      state: AuthStateInterface,
      action: { currentUser: CurrentUserInterface }
    ): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (
      state: AuthStateInterface,
      action: { errors: BackendErrorsInterface }
    ): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.errors
    })
  )
);
