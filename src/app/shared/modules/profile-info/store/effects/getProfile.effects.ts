import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { ProfileService } from '../../../../services/profile.service'
import {
    getProfileAction,
    getProfileFailureAction,
    getProfileSuccessAction,
} from '../actions/getProfile.actions'

@Injectable()
export class GetProfileEffects {
    profile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getProfileAction),
            switchMap(({ username }) =>
                this.profileService.getProfile(username).pipe(
                    map(({ profile }) => {
                        return getProfileSuccessAction({ profile })
                    }),
                    catchError((error: any) => {
                        console.log('Errors', error)
                        return of(getProfileFailureAction())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) {}
}
