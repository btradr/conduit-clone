import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const loginAction = createAction(
  ActionTypesEnum.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypesEnum.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypesEnum.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
