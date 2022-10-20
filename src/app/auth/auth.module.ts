import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
