import { createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface'
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from './actions/register.actions'
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from './actions/login.actions'
import {
    fetchUserAction,
    fetchUserFailureAction,
    fetchUserSuccessAction,
} from './actions/fetchUser.actions'
import {
    updateUserAction,
    updateUserFailureAction,
    updateUserSuccessAction,
} from './actions/update-user.actions'
import { logoutAction, logoutSuccessAction } from './actions/logout.actions'

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLogged: null,
    errors: null,
    isLoading: false,
    currentUser: null,
}

export const authReducer = createReducer(
    initialState,

    //Register actions
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            errors: null,
        })
    ),
    on(
        registerSuccessAction,
        (state, { currentUser }): AuthStateInterface => ({
            ...state,
            currentUser,
            isSubmitting: false,
            isLogged: true,
        })
    ),
    on(
        registerFailureAction,
        (state, { errors }): AuthStateInterface => ({
            ...state,
            errors,
            isSubmitting: false,
            isLogged: false,
        })
    ),

    //Login actions
    on(
        loginAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            errors: null,
        })
    ),
    on(
        loginSuccessAction,
        (state, { currentUser }): AuthStateInterface => ({
            ...state,
            currentUser,
            isSubmitting: false,
            isLogged: true,
        })
    ),
    on(
        loginFailureAction,
        (state, { errors }): AuthStateInterface => ({
            ...state,
            errors,
            isSubmitting: false,
            isLogged: false,
        })
    ),

    //Logout
    on(logoutAction, (state): AuthStateInterface => {
        return {
            ...state,
            isSubmitting: true,
        }
    }),

    on(logoutSuccessAction, (state): AuthStateInterface => {
        return {
            ...state,
            isSubmitting: false,
            currentUser: null,
            isLogged: false,
        }
    }),

    on(loginFailureAction, (state): AuthStateInterface => {
        return {
            ...state,
            isSubmitting: false,
        }
    }),

    //Fetch User actions
    on(
        fetchUserAction,
        (state): AuthStateInterface => ({
            ...state,
            errors: null,
            isLoading: true,
        })
    ),
    on(
        fetchUserSuccessAction,
        (state, { currentUser }): AuthStateInterface => ({
            ...state,
            currentUser,
            isLoading: false,
            isLogged: true,
        })
    ),
    on(
        fetchUserFailureAction,
        (state): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLogged: false,
            currentUser: null,
        })
    ),

    //Update User actions
    on(
        updateUserAction,
        (state): AuthStateInterface => ({
            ...state,
            errors: null,
            isSubmitting: true,
        })
    ),
    on(
        updateUserSuccessAction,
        (state, { currentUser }): AuthStateInterface => ({
            ...state,
            currentUser,
            isSubmitting: false,
            isLogged: true,
        })
    ),
    on(
        updateUserFailureAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLogged: false,
            currentUser: null,
        })
    )
)

export const authFeatureKey = 'auth'
