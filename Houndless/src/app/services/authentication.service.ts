import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<NuevoUsuario>;
    private currentUserEmail: BehaviorSubject<String>;

    public currentUser: Observable<NuevoUsuario>;
    public correo:Observable<String>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<NuevoUsuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserEmail = new BehaviorSubject<String>(localStorage.getItem('correo'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.correo = this.currentUserEmail.asObservable();
    }

    public get currentUserValue(): NuevoUsuario {
        return this.currentUserSubject.value;
    }
    public get currentUserEmailV(): String {
        return this.currentUserEmail.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:3000/perfil/login/`, { "correo":username, "contrasenia":password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('correo',username);
                    this.currentUserSubject.next(user);
                    this.currentUserEmail.next(username);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('correo');
        this.currentUserSubject.next(null);
        this.currentUserEmail.next(null);
    }
}