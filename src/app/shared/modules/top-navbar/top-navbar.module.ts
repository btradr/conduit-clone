import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    TopNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent
  ]
})
export class TopNavbarModule { }
