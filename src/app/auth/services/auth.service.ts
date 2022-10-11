import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { AuthResponseInterface } from '../types/auth-response.interface'
import { CurrentUserInterface } from '../types/current-user.interface'
import { RequestLoginInterface } from '../types/request-login.interface'
import { RequestRegisterInterface } from '../types/request-register.interface'

const API = environment.API

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    register(data: RequestRegisterInterface): Observable<CurrentUserInterface> {
        return this.http
            .post<AuthResponseInterface>(API + 'users/', { user: data })
            .pipe(map((res) => res.user))
    }

    login(data: RequestLoginInterface): Observable<CurrentUserInterface> {
        return this.http
            .post<AuthResponseInterface>(API + 'users/login', {
                user: data,
            })
            .pipe(map((res) => res.user))
    }

    fetchUser(): Observable<CurrentUserInterface> {
        return this.http
            .get<AuthResponseInterface>(API + 'user/')
            .pipe(map((res) => res.user))
    }

    updateUser(user: CurrentUserInterface): Observable<CurrentUserInterface> {
        return this.http
            .put<{ user: CurrentUserInterface }>(API + 'user/', { user })
            .pipe(map((res) => res.user))
    }
}
