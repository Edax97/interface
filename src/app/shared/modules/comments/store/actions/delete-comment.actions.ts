import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { CommentsResponseInterface } from '../../types/comments-response.interface'

export const deleteCommentAction = createAction(
    ActionTypes.DELETE_COMMENT,
    props<{ id: number; slug: string }>()
)

export const deleteCommentSuccessAction = createAction(
    ActionTypes.DELETE_COMMENT_SUCCESS,
    props<{ id: number }>()
)

export const deleteCommentFailureAction = createAction(
    ActionTypes.DELETE_COMMENT_FAILURE
)
