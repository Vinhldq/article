import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as ArticlesActions from "../action/articles.action";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {environment} from "../../environments/environment";
import {Articles} from "../states/articles.state";
import {ArticlesService} from "../services/articles.service";

@Injectable()
export class ArticlesEffects {
  constructor(private articleService: ArticlesService, private actions: Actions) {
  }

  $getArticles = createEffect(() => this.actions.pipe(
    ofType(ArticlesActions.getArticles),
    switchMap((actions) => this.articleService.getArticles(actions.q, actions.from, actions.sortBy ).pipe(
      map((res: any) => ArticlesActions.getArticlesSuccess({articles: res['articles'] as Articles[]})),
      catchError(error => of(ArticlesActions.getArticlesFailure({error})))
    ))
  ));



}
