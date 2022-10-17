import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { DateService } from 'src/app/shared/services/date.service'
import { CommentsService } from '../../services/comments.service'
import { CommentsResponseInterface } from '../../types/comments-response.interface'
import {
    getCommentsAction,
    getCommentsFailureAction,
    getCommentsSuccessAction,
} from '../actions/get-comments.actions'

@Injectable()
export class GetCommentsEffects {
    comments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCommentsAction),
            switchMap(({ slug }) =>
                this.commentsService.getComments(slug).pipe(
                    map(({ comments }: CommentsResponseInterface) => {
                        const commentsUpdated = comments.map((c) => ({
                            ...c,
                            updatedAt: this.date.formatDate(c.updatedAt),
                        }))
                        return getCommentsSuccessAction({
                            comments: commentsUpdated.reverse(),
                        })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getCommentsFailureAction())
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private commentsService: CommentsService,
        private date: DateService
    ) {}
}
