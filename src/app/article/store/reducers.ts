import { createReducer, on } from '@ngrx/store'
import { ArticleStateInterface } from '../types/article-state.interface'
import {
    deleteArticleAction,
    deleteArticleFailureAction,
    deleteArticleSuccesAction,
} from './actions/deleteArticle.actions'
import { favArticleAction } from './actions/favArticle'
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccesAction,
} from './actions/getArticle.actions'

const initialState: ArticleStateInterface = {
    errors: null,
    isLoading: false,
    article: null,
}

export const articleReducer = createReducer(
    initialState,

    //getFeed actions
    on(
        getArticleAction,
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
            article: null,
        })
    ),

    on(getArticleSuccesAction, (state, { article }): ArticleStateInterface => {
        return {
            ...state,
            isLoading: false,
            article,
        }
    }),
    on(
        getArticleFailureAction,
        (state, { errors }): ArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
            article: null,
        })
    ),

    //delete article actions
    on(
        deleteArticleAction,
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
            article: null,
        })
    ),

    on(deleteArticleSuccesAction, (state): ArticleStateInterface => {
        return {
            ...state,
            isLoading: false,
        }
    }),
    on(
        deleteArticleFailureAction,
        (state, { errors }): ArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
        })
    ),

    on(
        favArticleAction,
        (state, { favorited, favoritesCount }): ArticleStateInterface => ({
            ...state,
            article: { ...state.article, favorited, favoritesCount },
        })
    )
)

export const articleFeatureKey = 'article'
