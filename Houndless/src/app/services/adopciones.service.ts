import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdopcionesService {

  endpoint = 'http://localhost:3000/adopciones';
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

	getAdopciones(): Observable<any> {
		
		return this.http.get(this.endpoint).pipe(
	    map(this.extractData));
	    
		
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

/*
deleteAlumnos(id): Observable<any> {
  return this.http.delete<any>(this.endpoint + '/' + id, this.httpOptions).pipe(
    tap(_ => console.log(`deleted alumno matricula=${id}`)),
    catchError(this.handleError<any>('deleteAlumno'))
  );
}*/


getAdopcion(id): Observable<any> {
  return this.http.get(this.endpoint + '/' + id).pipe(
    map(this.extractData));
}

addAdopcion (adopcion): Observable<any> {
  console.log(adopcion);
  console.log(JSON.stringify(adopcion));
  return this.http.post<any>(this.endpoint + '/', JSON.stringify(adopcion), this.httpOptions).pipe(
    tap((adopcion) => console.log(`added adopcion w/ id=${adopcion.id}`)),
    catchError(this.handleError<any>('addAdopcion'))
  );
}

updateAdopcion (id, adopcion): Observable<any> {
  return this.http.put(this.endpoint + '/' + id, JSON.stringify(adopcion), this.httpOptions).pipe(
    tap(_ => console.log(`updated adopcion id=${id}`)),
    catchError(this.handleError<any>('updateAdopcion'))
  );
}
}
