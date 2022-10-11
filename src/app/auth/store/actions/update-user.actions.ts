import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { CurrentUserInterface } from '../../types/current-user.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { UpdateUserInterface } from '../../types/update-user.interface'

//REGISTER
export const updateUserAction = createAction(
    ActionTypes.UPDATE_USER,
    props<{ user: UpdateUserInterface }>()
)

export const updateUserSuccessAction = createAction(
    ActionTypes.UPDATE_USER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const updateUserFailureAction = createAction(
    ActionTypes.UPDATE_USER_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
