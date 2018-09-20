import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private url_base = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies() {
    return this.http.get(this.url_base + "/movie/latest?api_key=56565958363476674e5e63643c787867");
  }
}
