import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { AuthStateInterface } from '../../types/auth-state.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
);

export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): BackendErrorsInterface => authState.backendErrors
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): CurrentUserInterface => authState.currentUser
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isLoggedIn === false
);
