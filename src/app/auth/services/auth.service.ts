import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { RegisterRequestInterface } from '../types/register-request.interface';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { AuthResponseInterface } from '../types/auth-response.interface';

@Injectable()
export class AuthService {

  public constructor(
    private http: HttpClient
  ) { }

  public register(userData: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, userData)
      .pipe(
        map((response: AuthResponseInterface): CurrentUserInterface => response.user)
      );
  }

}
