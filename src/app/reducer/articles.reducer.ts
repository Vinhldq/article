import * as ArticlesActions from '../action/articles.action';
import {createReducer, on} from "@ngrx/store";
import {Articles} from "../states/articles.state";

let initialState = {
  articles: [] as Articles[],
  error: null,
  isLoading: false
};
export const aritclesInitialState = createReducer(
  initialState,
  on(ArticlesActions.getArticles, state => ({
    ...state,
    isLoading: true
  })),
  on(ArticlesActions.getArticlesSuccess, (state, {articles}) => ({
    ...state,
    isLoading: false,
    articles
  })),
  on(ArticlesActions.getArticlesFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    error
  }))
)
