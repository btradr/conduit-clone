import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const registerAction = createAction(
  ActionTypesEnum.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypesEnum.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypesEnum.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
