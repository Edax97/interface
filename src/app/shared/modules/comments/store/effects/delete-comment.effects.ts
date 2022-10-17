import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { CommentsService } from '../../services/comments.service'
import {
    deleteCommentAction,
    deleteCommentFailureAction,
    deleteCommentSuccessAction,
} from '../actions/delete-comment.actions'

@Injectable()
export class DeleteCommentEffects {
    delete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteCommentAction),
            switchMap(({ id, slug }) =>
                this.commentsService.deleteComment(slug, id).pipe(
                    map(
                        () => deleteCommentSuccessAction({ id }),
                        catchError(({ error }: HttpErrorResponse) =>
                            of(deleteCommentFailureAction())
                        )
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private commentsService: CommentsService
    ) {}
}
