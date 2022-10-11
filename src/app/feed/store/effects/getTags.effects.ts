import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { FeedService } from '../../services/feed.service'
import {
    getTagsAction,
    getTagsFailureAction,
    getTagsSuccessAction,
} from '../actions/getTags.actions'

@Injectable()
export class GetTagsEffects {
    getTags$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getTagsAction),
            switchMap(() =>
                this.feedService.getTags().pipe(
                    map(({ tags }) => getTagsSuccessAction({ tags })),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getTagsFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )
    constructor(private actions$: Actions, private feedService: FeedService) {}
}
