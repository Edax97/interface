import { createReducer, on } from '@ngrx/store'
import { FeedStateInterface } from '../types/feed-state.interface'
import {
    favPostAction,
    favPostFailureAction,
    favPostSuccessAction,
} from './actions/favPost.actions'
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
} from './actions/getFeed.actions'
import {
    getTagsAction,
    getTagsFailureAction,
    getTagsSuccessAction,
} from './actions/getTags.actions'

const initialState: FeedStateInterface = {
    errors: null,
    isLoading: false,
    articlesCount: null,
    currentArticles: null,

    tags: null,
    tagsLoading: false,
    tagsError: null,

    favLoading: null,
}

export const feedReducer = createReducer(
    initialState,

    //getFeed actions
    on(
        getFeedAction,
        (state): FeedStateInterface => ({
            ...state,
            currentArticles: null,
            isLoading: true,
            errors: null,
        })
    ),

    on(
        getFeedSuccessAction,
        (state, { feed }): FeedStateInterface => ({
            ...state,
            isLoading: false,
            currentArticles: feed.articles,
            articlesCount: feed.articlesCount,
            errors: null,
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

    //get Tags actions
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
        getTagsFailureAction,
        (state, { errors }): FeedStateInterface => ({
            ...state,
            tagsError: errors,
            tagsLoading: false,
            tags: null,
        })
    ),

    //fav post actions
    on(
        favPostAction,
        (state, { slug }): FeedStateInterface => ({
            ...state,
            favLoading: slug,
        })
    ),

    on(
        favPostSuccessAction,
        (state, { favorited, favoritesCount }): FeedStateInterface => {
            let currentArticles = null
            if (state.currentArticles)
                currentArticles = state.currentArticles.map((article) => {
                    if (article.slug == state.favLoading)
                        return { ...article, favorited, favoritesCount }
                    return article
                })
            return {
                ...state,
                currentArticles,
                favLoading: null,
            }
        }
    ),
    on(
        favPostFailureAction,
        (state): FeedStateInterface => ({
            ...state,
            favLoading: null,
        })
    )
)

export const feedFeatureKey = 'feed'
