import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { CurrentUserInterface } from '../../types/current-user.interface'
import { RequestLoginInterface } from '../../types/request-login.interface'
import { ActionTypes } from '../action-types'

//LOGIN
export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: RequestLoginInterface }>()
)
export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
