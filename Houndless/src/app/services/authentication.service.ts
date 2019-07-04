import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<NuevoUsuario>;
    public currentUser: Observable<NuevoUsuario>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<NuevoUsuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): NuevoUsuario {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        console.log(username + password);
        return this.http.post<any>(`http://localhost:3000/perfil/login/`, { "correo":username, "contrasenia":password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}