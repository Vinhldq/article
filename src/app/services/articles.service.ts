import { Injectable } from '@angular/core';
import {ArticlesEffects} from "../effects/articles.effects";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  public getArticles(q: string, from: string, sortBy: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=`+environment.apiKey);
  }


}
