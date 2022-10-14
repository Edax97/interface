import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { EditArticleInterface } from '../../types/edit-article.interface'

export const postArticleAction = createAction(
    ActionTypes.POST_ARTICLE,
    props<{ article: EditArticleInterface }>()
)

export const postArticleSuccesAction = createAction(
    ActionTypes.POST_ARTICLE_SUCCESS,
    props<{ slug: string }>()
)

export const postArticleFailureAction = createAction(
    ActionTypes.POST_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
