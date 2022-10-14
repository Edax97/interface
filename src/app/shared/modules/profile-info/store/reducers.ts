import { createReducer, on } from '@ngrx/store'
import { ProfileStateInterface } from '../types/profile-state.interface'
import {
    followAction,
    followFailureAction,
    followSuccessAction,
} from './actions/follow.actions'
import {
    getProfileAction,
    getProfileFailureAction,
    getProfileSuccessAction,
} from './actions/getProfile.actions'

const initialState: ProfileStateInterface = {
    errors: null,
    isLoading: false,
    profile: null,
    followLoading: false,
}

export const profileReducer = createReducer(
    initialState,

    //getProfile actions
    on(
        getProfileAction,
        (state): ProfileStateInterface => ({
            ...state,
            profile: null,
            isLoading: true,
            errors: null,
        })
    ),

    on(
        getProfileSuccessAction,
        (state, { profile }): ProfileStateInterface => ({
            ...state,
            isLoading: false,
            errors: null,
            profile,
        })
    ),
    on(
        getProfileFailureAction,
        (state): ProfileStateInterface => ({
            ...state,
            errors: { 'NOT FOUND': ["Couldn't fetch profile"] },
            isLoading: false,
        })
    ),

    //fav post actions
    on(
        followAction,
        (state): ProfileStateInterface => ({
            ...state,
            followLoading: true,
        })
    ),

    on(
        followSuccessAction,
        (state, { profile }): ProfileStateInterface => ({
            ...state,
            followLoading: false,
            profile,
        })
    )
)

export const profileFeatureKey = 'profile'
