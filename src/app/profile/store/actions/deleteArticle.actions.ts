import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

export const deleteArticleAction = createAction(
    ActionTypes.DELETE_ARTICLE,
    props<{ slug: string }>()
)

export const deleteArticleSuccesAction = createAction(
    ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleFailureAction = createAction(
    ActionTypes.DELETE_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
