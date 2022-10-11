import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PersistanceService } from './persistance.service'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.persistenceService.get('accessToken')
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                },
            })
        }

        return next.handle(req)
    }
    constructor(private persistenceService: PersistanceService) {}
}
