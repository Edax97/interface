import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, filter, map, of, switchMap, tap } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../types/current-user.interface'
import {
    fetchUserAction,
    fetchUserFailureAction,
    fetchUserSuccessAction,
} from '../actions/fetchUser.actions'

@Injectable()
export class FetchUserEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService,
        private persistenceService: PersistanceService
    ) {}

    fetchUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserAction),
            switchMap(() => {
                if (!this.persistenceService.get('accessToken'))
                    return of(fetchUserFailureAction())
                return this.authService.fetchUser().pipe(
                    map((currentUser: CurrentUserInterface) =>
                        fetchUserSuccessAction({ currentUser })
                    ),
                    catchError(() => of(fetchUserFailureAction()))
                )
            })
        )
    )
}
