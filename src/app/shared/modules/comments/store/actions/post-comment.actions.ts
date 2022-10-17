import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { CommentPostInterface } from '../../types/comment-post.interface'
import { CommentInterface } from '../../types/comment.interface'

export const postCommentAction = createAction(
    ActionTypes.POST_COMMENT,
    props<{ slug: string; postComment: CommentPostInterface }>()
)

export const postCommentSuccessAction = createAction(
    ActionTypes.POST_COMMENT_SUCCESS,
    props<{ comment: CommentInterface }>()
)

export const postCommentFailureAction = createAction(
    ActionTypes.POST_COMMENT_FAILURE
)
