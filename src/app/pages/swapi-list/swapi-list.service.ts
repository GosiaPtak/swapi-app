import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Page } from '../../shared/models/pages.model';
@Injectable({
  providedIn: 'root'
})
export class SwapiListService {
  private readonly url = 'https://swapi.co/api/people/';
  constructor(private http: HttpClient) {}

  getPeople(): Observable<{}> {
    return this.http
      .get<Page>(this.url)
      .pipe(
        switchMap(pages => {
          const totalNumberOfPages: number = Math.ceil(pages.count / 10);
          const tableOfPageNumbers: number[] = [...Array(totalNumberOfPages).keys()];
          const callResult: Observable<{}>[] = tableOfPageNumbers.map(elem => this.http.get(`${this.url}?page=${elem + 1}`));
          return forkJoin<{}>(callResult).pipe(
            map(calls => {
              calls.map((call: { results: [] }) => call.results);
              return calls;
            })
          );
        })
      )
      .pipe(
        catchError(error => {
          console.log(`Caught error ${error}`);
          return of({ results: null });
        })
      );
  }
}
