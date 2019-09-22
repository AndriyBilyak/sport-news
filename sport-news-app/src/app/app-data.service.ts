import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Article } from './interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  constructor(private http: HttpClient) {}

  getArticlesByCategory(categoryId) {
    return this.http
      .get('./assets/mockedData/articles.json')
      .pipe(
        map((articles: Array<Article>) =>
          articles.filter(article => article.category === categoryId)
        )
      );
  }

  getArticlesByConference(сonferenceId) {
    return this.http
      .get('./assets/mockedData/articles.json')
      .pipe(
        map((articles: Array<Article>) =>
          articles.filter(article => article.conference === сonferenceId)
        )
      );
  }

  getArticlesByTeam(teamId) {
    return this.http
      .get('./assets/mockedData/articles.json')
      .pipe(map((articles: Array<Article>) => articles.filter(article => article.team === teamId)));
  }

  getDealbookContent() {
    return this.http.get('./assets/mockedData/dealbook.json');
  }

  getHomeContent() {
    return this.http.get('./assets/mockedData/home.json');
  }

  getVideoContent() {
    return this.http.get('./assets/mockedData/video.json');
  }

  getNavigationConfig() {
    return this.http.get('./assets/mockedData/navigationConfig.json');
  }

  getCustomRoutesConfig() {
    return this.http.get('./assets/mockedData/customRoutesConfig.json');
  }

  findContent() {
    return this.http.get('./assets/mockedData/searchContent.json');
  }
}
