import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CurrentUserInterface } from '../../../../types/current-user.interface';
import { AppStateInterface } from '../../../../types/app-state.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from '../../../../../auth/store/selectors/auth.selector';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent implements OnInit {

  public currentUser$: Observable<CurrentUserInterface | null>;
  public isLoggedIn$: Observable<boolean>;
  public isAnonymous$: Observable<boolean>;

  public constructor(
    private store: Store<AppStateInterface>
  ) { }

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
  }

}
