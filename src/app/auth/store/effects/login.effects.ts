import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../types/current-user.interface'
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from '../actions/login.actions'
import {
    logoutAction,
    logoutFailureAction,
    logoutSuccessAction,
} from '../actions/logout.actions'

@Injectable()
export class LoginEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) =>
                this.authService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistenceService.set(
                            'accessToken',
                            currentUser.token
                        )
                        return loginSuccessAction({ currentUser })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(loginFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutAction),
            map(() => {
                const status = this.persistenceService.delete('accessToken')
                if (status) return logoutSuccessAction()
                return logoutFailureAction()
            })
        )
    )

    redirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => this.router.navigate(['/']))
            ),
        { dispatch: false }
    )

    redirectLogout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logoutSuccessAction),
                tap(() => this.router.navigate(['/']))
            ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService,
        private persistenceService: PersistanceService
    ) {}
}
