import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ListaLibrosComponent } from './app/app';

bootstrapApplication(ListaLibrosComponent, appConfig)
  .catch((err) => console.error(err));
