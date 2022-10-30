import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/get-current-user.action';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class GetCurrentUserEffect {

  public readonly getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = this.persistenceService.get('accessToken');

      if (!token) {
        return of(getCurrentUserFailureAction());
      }

      return this.authService
        .getCurrentUser()
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser: currentUser });
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        );
    })
  ));

  public constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) { }

}
