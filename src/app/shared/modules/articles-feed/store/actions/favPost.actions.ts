import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { FavResponseInterface } from 'src/app/shared/types/fav-response.interface'

export const favPostAction = createAction(
    ActionTypes.FAV_POST,
    props<{ slug: string; upvoted: boolean }>()
)

export const favPostSuccessAction = createAction(
    ActionTypes.FAV_POST_SUCCESS,
    props<FavResponseInterface>()
)

export const favPostFailureAction = createAction(
    ActionTypes.FAV_POST_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
