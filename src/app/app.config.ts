import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import { routes } from './app.routes';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeDbService} from './services/mock/fake-db.service';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(FakeDbService))
  ]
};
