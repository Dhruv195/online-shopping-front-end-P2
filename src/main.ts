/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { CommonInterceptor } from './app/shared/interceptor/common.interceptor';

bootstrapApplication(AppComponent,appConfig).catch((err) =>
  console.error(err)
);
