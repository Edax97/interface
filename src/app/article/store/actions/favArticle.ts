import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'

export const favArticleAction = createAction(
    ActionTypes.FAV_ARTICLE,
    props<{ favorited: boolean; favoritesCount: number }>()
)
