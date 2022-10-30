import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { AuthStateInterface } from '../../types/auth-state.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
);

export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): BackendErrorsInterface => authState.backendErrors
);
