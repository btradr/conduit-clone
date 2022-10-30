import { createAction, props } from '@ngrx/store';

import { ActionTypesEnum } from '../action-types.enum';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

export const getCurrentUserAction = createAction(ActionTypesEnum.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(ActionTypesEnum.GET_CURRENT_USER_FAILURE);
