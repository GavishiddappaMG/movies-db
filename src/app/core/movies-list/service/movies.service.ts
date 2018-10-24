import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MoviesService {


  constructor(private httpClient: HttpClient) { }


  searchMovies(movieName: string) {
    const param = new HttpParams().set('query', movieName).set('language', environment.language);
    const url = environment.apiendpoint + 'search/multi';
    return this.httpClient.get(url, { params: param});
  }
}
