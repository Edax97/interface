import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../types/current-user.interface'
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from '../actions/register.actions'

@Injectable()
export class RegisterEffects {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) =>
                this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistenceService.set(
                            'accessToken',
                            currentUser.token
                        )
                        return registerSuccessAction({ currentUser })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(registerFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )

    redirectSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => this.router.navigate(['/']))
            ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private persistenceService: PersistanceService
    ) {}
}
