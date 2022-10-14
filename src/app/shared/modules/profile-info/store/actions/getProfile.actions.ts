import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ProfileInterface } from '../../types/profile.interface'

export const getProfileAction = createAction(
    ActionTypes.GET_PROFILE,
    props<{ username: string }>()
)

export const getProfileSuccessAction = createAction(
    ActionTypes.GET_PROFILE_SUCCESS,
    props<{ profile: ProfileInterface }>()
)

export const getProfileFailureAction = createAction(
    ActionTypes.GET_PROFILE_FAILURE
)
