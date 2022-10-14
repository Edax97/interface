import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { EditArticleInterface } from '../../types/edit-article.interface'

export const updateArticleAction = createAction(
    ActionTypes.UPDATE_ARTICLE,
    props<{ slug: string; editArticle: EditArticleInterface }>()
)

export const updateArticleSuccesAction = createAction(
    ActionTypes.UPDATE_ARTICLE_SUCCESS,
    props<{ slug: string }>()
)

export const updateArticleFailureAction = createAction(
    ActionTypes.UPDATE_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
