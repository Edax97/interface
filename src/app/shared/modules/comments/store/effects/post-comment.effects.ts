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
import {
    postCommentAction,
    postCommentFailureAction,
    postCommentSuccessAction,
} from '../actions/post-comment.actions'

@Injectable()
export class PostCommentEffects {
    post$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postCommentAction),
            switchMap(({ slug, postComment }) =>
                this.commentsService.postComment(slug, postComment).pipe(
                    map(({ comment }) =>
                        postCommentSuccessAction({
                            comment: {
                                ...comment,
                                updatedAt: this.date.formatDate(
                                    comment.updatedAt
                                ),
                            },
                        })
                    ),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(postCommentFailureAction())
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
