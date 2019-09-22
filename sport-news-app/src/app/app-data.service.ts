import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Article } from './interfaces/article';
import { Team } from './interfaces/team';
import { SearchResult } from './interfaces/searchResult';

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

  getArticleById() {
    return this.http.get('./assets/mockedData/article.json');
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

  findContent(term) {
    return this.http
      .get('./assets/mockedData/searchContent.json')
      .pipe(
        map((searchResultes: Array<SearchResult>) =>
          searchResultes
            .filter(
              searchResulte => searchResulte.text.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
            .slice(0, 10)
        )
      );
  }

  getSubscriptions() {
    return this.http.get('./assets/mockedData/subscriptions.json');
  }

  getSurveys() {
    return this.http.get('./assets/mockedData/surveys.json');
  }

  getTeams(term) {
    return this.http
      .get('./assets/mockedData/teams.json')
      .pipe(
        map((teams: Array<Team>) =>
          teams
            .filter(team => team.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
            .slice(0, 10)
        )
      );
  }
}
