import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { AuthStateInterface } from '../types/auth-state.interface'

export const authFeatureSelector = (
    state: AppStateInterface
): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface): boolean => authState?.isSubmitting
)

export const isLoggedSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface): boolean | null => authState?.isLogged
)

export const errorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState?.errors
)

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState?.currentUser
)
