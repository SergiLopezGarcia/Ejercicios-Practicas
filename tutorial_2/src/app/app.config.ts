import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    /**
     * REACT NOTE (Dependency Injection):
     * Para que los servicios puedan usar `HttpClient`, debemos "proveerlo" globalmente aquí.
     * Es similar a envolver tu app en un Context.Provider de React.
     */
    provideHttpClient()
  ]
};
