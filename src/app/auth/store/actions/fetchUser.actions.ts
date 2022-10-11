import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { CurrentUserInterface } from '../../types/current-user.interface'
import { ActionTypes } from '../action-types'

//LOGIN
export const fetchUserAction = createAction(ActionTypes.FETCH_USER)
export const fetchUserSuccessAction = createAction(
    ActionTypes.FETCH_USER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const fetchUserFailureAction = createAction(
    ActionTypes.FETCH_USER_FAILURE
)
