import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

@Injectable()
export class RegisterEffect {

  public readonly register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this.authService
        .register(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => registerSuccessAction({ currentUser: currentUser })),
          catchError((errorResponse: HttpErrorResponse) => of(registerFailureAction({ errors: errorResponse.error.errors })))
        );
    })
  ));

  public constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
