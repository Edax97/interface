import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { RequestRegisterInterface } from 'src/app/auth/types/request-register.interface'
import { CurrentUserInterface } from '../../types/current-user.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

//REGISTER
export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: RequestRegisterInterface }>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
