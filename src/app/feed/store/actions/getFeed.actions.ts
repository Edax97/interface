import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { FeedInterface } from '../../types/feed.interface'
import { GetFeedProps } from '../../types/get-feed-props'

export const getFeedAction = createAction(
    ActionTypes.GET_FEED,
    props<GetFeedProps>()
)

export const updateFeedAction = createAction(
    ActionTypes.GET_FEED,
    props<{ offset: number; limit: number }>()
)

export const getFeedSuccessAction = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{ feed: FeedInterface }>()
)

export const getFeedFailureAction = createAction(
    ActionTypes.GET_FEED_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
