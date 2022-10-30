import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStateInterface } from './shared/types/app-state.interface';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.action';

@Component({
  selector: 'app-root',
  template: `
    <app-top-navbar></app-top-navbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public constructor(
    private store: Store<AppStateInterface>
  ) { }


  public ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }

}
