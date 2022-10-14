import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { ProfileService } from 'src/app/shared/services/profile.service'

import { followAction, followSuccessAction } from '../actions/follow.actions'
import { getProfileFailureAction } from '../actions/getProfile.actions'

@Injectable()
export class FollowEffects {
    follow$ = createEffect(() =>
        this.actions$.pipe(
            ofType(followAction),
            switchMap(({ username, following }) =>
                this.profileService.onFollow(username, following).pipe(
                    map(({ profile }) => followSuccessAction({ profile })),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getProfileFailureAction())
                    )
                )
            )
        )
    )
    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) {}
}
