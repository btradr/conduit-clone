import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Modules
import { AuthRoutingModule } from './auth-routing.module';
import { BackendErrorsMessagesModule } from '../shared/modules/backend-errors-messages/backend-errors-messages.module';

// Components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { AuthService } from './services/auth.service';
import { PersistenceService } from '../shared/services/persistence.service';

// Effects
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';
import { GetCurrentUserEffect } from './store/effects/get-current-user.effect';

// Reducers
import { authReducer } from './store/reducers/auth.reducer';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    AuthRoutingModule,
    BackendErrorsMessagesModule
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})
export class AuthModule { }
