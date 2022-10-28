import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { RegisterComponent } from './components/register/register.component';

// Services
import { AuthService } from './services/auth.service';

// Effects
import { RegisterEffect } from './store/effects/register.effect';

// Reducers
import { registerReducer } from './store/reducers/register.reducer';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', registerReducer),
    EffectsModule.forFeature([RegisterEffect]),
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
