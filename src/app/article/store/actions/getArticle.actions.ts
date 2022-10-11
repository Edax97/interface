import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackendErrorsInterface } from 'mediumclone/src/app/shared/types/backendErrors.interface'

export const getArticleAction = createAction(
    ActionTypes.GET_ARTICLE,
    props<{ slug: string }>()
)

export const getArticleSuccesAction = createAction(
    ActionTypes.GET_ARTICLE_SUCCESS,
    props<{ article: ArticleInterface }>()
)

export const getArticleFailureAction = createAction(
    ActionTypes.GET_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
