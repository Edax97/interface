import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ProfileStateInterface } from '../types/profile-state.interface'

export const profileFeatureSelector = (
    state: AppStateInterface
): ProfileStateInterface => state.profile

export const isLoadingSelector = createSelector(
    profileFeatureSelector,
    (profileState: ProfileStateInterface): boolean | null =>
        profileState?.isLoading
)

export const errorsSelector = createSelector(
    profileFeatureSelector,
    (profileState: ProfileStateInterface) => profileState?.errors
)

export const profileSelector = createSelector(
    profileFeatureSelector,
    (profileState: ProfileStateInterface) => profileState?.profile
)

export const followLoadingSelector = createSelector(
    profileFeatureSelector,
    (profileState: ProfileStateInterface): boolean | null =>
        profileState?.followLoading
)
