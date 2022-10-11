import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../types/current-user.interface'

import {
    updateUserAction,
    updateUserFailureAction,
    updateUserSuccessAction,
} from '../actions/update-user.actions'

@Injectable()
export class UpdateUserEffects {
    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUserAction),
            switchMap(({ user }) =>
                this.authService.updateUser(user).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistenceService.set(
                            'accessToken',
                            currentUser.token
                        )
                        return updateUserSuccessAction({ currentUser })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(updateUserFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )

    redirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(updateUserSuccessAction),
                tap(({ currentUser }) =>
                    this.router.navigate(['/profile', currentUser.username])
                )
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
