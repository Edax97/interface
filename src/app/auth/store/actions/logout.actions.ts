import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { CurrentUserInterface } from '../../types/current-user.interface'
import { RequestLoginInterface } from '../../types/request-login.interface'
import { ActionTypes } from '../action-types'

//LOGIN
export const logoutAction = createAction(ActionTypes.LOGOUT)
export const logoutSuccessAction = createAction(ActionTypes.LOGOUT_SUCCESS)
export const logoutFailureAction = createAction(ActionTypes.LOGOUT_FAILURE)
