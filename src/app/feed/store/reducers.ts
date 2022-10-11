import { createReducer, on } from '@ngrx/store'
import { FeedStateInterface } from '../types/feed-state.interface'
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
    updateFeedAction,
} from './actions/getFeed.actions'
import { getTagsAction, getTagsSuccessAction } from './actions/getTags.actions'

const initialState: FeedStateInterface = {
    errors: null,
    isLoading: false,
    articlesCount: null,
    currentArticles: null,
    page: null,
    tagPage: null,

    tags: null,
    tagsLoading: false,
    tagsError: null,
}

export const feedReducer = createReducer(
    initialState,

    //getFeed actions
    on(
        getFeedAction,
        (state, { feedUrl, tag }): FeedStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
            tagPage: tag,
            page: feedUrl,
        })
    ),

    on(
        getFeedSuccessAction,
        (state, { feed }): FeedStateInterface => ({
            ...state,
            isLoading: false,
            currentArticles: feed.articles,
            articlesCount: feed.articlesCount,
        })
    ),
    on(
        getFeedFailureAction,
        (state, { errors }): FeedStateInterface => ({
            ...state,
            errors,
            isLoading: false,
            currentArticles: null,
            articlesCount: null,
        })
    ),

    //getFeed actions
    on(
        getTagsAction,
        (state): FeedStateInterface => ({
            ...state,
            tagsLoading: true,
            tagsError: null,
        })
    ),

    on(
        getTagsSuccessAction,
        (state, { tags }): FeedStateInterface => ({
            ...state,
            tagsLoading: false,
            tags,
        })
    ),
    on(
        getFeedFailureAction,
        (state, { errors }): FeedStateInterface => ({
            ...state,
            tagsError: errors,
            tagsLoading: false,
            tags: null,
        })
    )
)

export const feedFeatureKey = 'feed'
