import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { CommentsResponseInterface } from '../../types/comments-response.interface'

export const getCommentsAction = createAction(
    ActionTypes.GET_COMMENTS,
    props<{ slug: string }>()
)

export const getCommentsSuccessAction = createAction(
    ActionTypes.GET_COMMENTS_SUCCESS,
    props<CommentsResponseInterface>()
)

export const getCommentsFailureAction = createAction(
    ActionTypes.GET_COMMENTS_FAILURE
)
