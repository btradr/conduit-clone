import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-navbar></app-top-navbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
