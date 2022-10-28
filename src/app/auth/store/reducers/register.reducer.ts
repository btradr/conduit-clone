import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../../types/auth-state.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  backendErrors: null
};

export const registerReducer = createReducer(
  initialState,
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
  )
);
