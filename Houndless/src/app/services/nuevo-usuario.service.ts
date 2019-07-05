import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  endpoint = 'http://localhost:3000/perfil';
	httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json'
 	 })
	};
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addPerfil (perfil): Observable<any> {
    console.log(perfil);
    console.log(JSON.stringify(perfil));
    return this.http.post(this.endpoint + '/', JSON.stringify(perfil), this.httpOptions).pipe(
      tap((perfil) => console.log(`added perfil`)),
      catchError(this.handleError<any>('failed'))
    );
  }

}
