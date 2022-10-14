import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ProfileInterface } from '../../types/profile.interface'

export const followAction = createAction(
    ActionTypes.FOLLOW,
    props<{ username: string; following: boolean }>()
)

export const followSuccessAction = createAction(
    ActionTypes.FOLLOW_SUCCESS,
    props<{ profile: ProfileInterface }>()
)

export const followFailureAction = createAction(
    ActionTypes.FOLLOW_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
