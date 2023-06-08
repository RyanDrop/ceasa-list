import { importProvidersFrom } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routing';
import {
  MY_DATE_FORMATS,
  MyCustomDateAdapter,
} from './app/helpers/date-format';
import { HOME_ROUTES } from './app/home/home.routing';

const ROUTES = [...APP_ROUTES, ...HOME_ROUTES];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(ROUTES), BrowserAnimationsModule),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR',
    },
    {
      provide: DateAdapter,
      useClass: MyCustomDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMATS,
    },
  ],
}).catch((err) => console.error(err));
