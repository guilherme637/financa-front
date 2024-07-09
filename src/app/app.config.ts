import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideEnvironmentNgxMask} from "ngx-mask";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      { eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideEnvironmentNgxMask(maskConfig),
    provideHttpClient(
      withFetch(),
    ),
  ]
};
