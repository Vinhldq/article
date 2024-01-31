import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {aritclesInitialState} from "./reducer/articles.reducer";
import {ArticlesEffects} from "./effects/articles.effects";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
    {articles: aritclesInitialState},
  ),
    provideEffects(
    [ArticlesEffects]
  ),
    provideHttpClient()
  ],
};
