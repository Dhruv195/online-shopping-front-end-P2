import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonInterceptor } from './shared/interceptor/common.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
  ],
};
