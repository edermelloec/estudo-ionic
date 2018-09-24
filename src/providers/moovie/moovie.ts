import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private url_base = "https://api.themoviedb.org/3";
  private api_key = "0d09731840a0c01d58643a45c319b3c6";
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }
 
  getLatesMovies() {
    return this.http.get(this.url_base + "/movie/popular?api_key="+this.api_key);
  }
}
