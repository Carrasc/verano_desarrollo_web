import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  endpoint = 'http://localhost:3000/anuncios';
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

	getAnuncios(): Observable<any> {
		
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


getAnuncio(id): Observable<any> {
  return this.http.get(this.endpoint + '/' + id).pipe(
    map(this.extractData));
}

addAnuncio (anuncio): Observable<any> {
  console.log(anuncio);
  console.log(JSON.stringify(anuncio));
  return this.http.post(this.endpoint + '/', JSON.stringify(anuncio), this.httpOptions).pipe(
    tap((anuncio) => console.log(`added anuncio w/ id=${anuncio}`)),
    catchError(this.handleError<any>('addAnuncio'))
  );
}

updateAnuncio (id, anuncio): Observable<any> {
  return this.http.put(this.endpoint + '/' + id, JSON.stringify(anuncio), this.httpOptions).pipe(
    tap(_ => console.log(`updated anuncio id=${id}`)),
    catchError(this.handleError<any>('updateAnuncio'))
  );
}


/*constructor() { }

  getAnuncios(){
    return[{
      id: "1",
      img_path:"assets/imgs/2.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      tags: ["perro", "herido", "negro"],
      usuario: "luiscbilbao@gmail.com"
    },{
      id: "2",
      img_path:"assets/imgs/3.jpg",
      titulo:"Cachorro con desnutrición",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Otro",
      coordenadas:["34512", "48391"],
      estado: "Puebla",
      municipio: "Puebla",
      tags: ["perro", "herido", "blanco", "sad"],
      usuario: "pelagio3@gmail.com"
    },{
      id: "3",
      img_path:"assets/imgs/4.jpg",
      titulo:"Perrito con cáncer",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Gran Danés",
      coordenadas:["17647", "98930"],
      estado: "CDMX",
      municipio: "Álvaro Obregón",
      tags: ["perro", "herido", "gris"],
      usuario: "alexmarcelo@gmail.com"
    },
    {
      id: "4",
      img_path:"assets/imgs/doggo.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      tags: ["perro", "herido", "negro"],
      usuario: "luiscbilbao@gmail.com"
    },
    {
      id: "4",
      img_path:"assets/imgs/doggo.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      tags: ["perro", "herido", "negro", "hola", "adios"],
      usuario: "luiscbilbao@gmail.com"
    }
    ];
  }*/
}
