import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  endpoint = 'http://localhost:3000/anuncios/count';
	httpOptions = {
  		headers: new HttpHeaders({
      'Content-Type':  'application/json',
 	 })
	};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
  let body = res;
  return body || { };
  }
  getAnuncio(id): Observable<any> {
    return this.http.get(this.endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  getData(raza: string): Observable<any>{
    return this.http.get(this.endpoint +"?where[raza]=" + raza).pipe(
      map(this.extractData));
  }

}
