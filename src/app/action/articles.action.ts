import { createAction, props } from '@ngrx/store';
import { Articles } from '../states/articles.state';

export  const getArticles = createAction(
  '[Article] Get Articles',
  props<{q: string; from:string; sortBy: string}>()
);

export const getArticlesSuccess = createAction(
  '[Article] Get Articles Success',
  props<{articles: Articles[]}>()
);

export const getArticlesFailure = createAction(
  '[Article] Get Articles Failure',
  props<{error: any}>()
);
