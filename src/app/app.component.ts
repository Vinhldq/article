import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {Articles, ArticlesState} from "./states/articles.state";
import {AsyncPipe} from "@angular/common";
import {ArticlesService} from "./services/articles.service";
import {getArticles} from "./action/articles.action";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-effects';
  $articles = this.store.select(state => state.articles.articles);
  $loading = this.store.select(state => state.articles.isLoading);
  $error = this.store.select(state => state.articles.error);
  constructor( private store: Store<{articles: ArticlesState}>, private articlesService: ArticlesService) {
    this.store.dispatch(getArticles({ q: 'tesla', from: '2023-12-31', sortBy: 'publishedAt'}));
  }






}
