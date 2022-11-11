import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TopNavbarModule } from './shared/modules/top-navbar/top-navbar.module';

// Components
import { AppComponent } from './app.component';

// Services
import { PersistenceService } from './shared/services/persistence.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';

// Interceptors
const AUTH_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    AppRoutingModule,
    AuthModule,
    TopNavbarModule
  ],
  providers: [
    PersistenceService,
    AUTH_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
