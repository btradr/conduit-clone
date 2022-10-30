import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class LoginEffect {

  public readonly login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ request }) => {
      return this.authService
        .login(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);

            return loginSuccessAction({ currentUser: currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => of(loginFailureAction({ errors: errorResponse.error.errors })))
        )
    })
  ));

  public readonly redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => this.router.navigateByUrl('/'))
    ),
    { dispatch: false }
  );

  public constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) { }

}
