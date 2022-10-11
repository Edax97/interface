import { createReducer, on } from '@ngrx/store'
import { ArticleStateInterface } from '../types/article-state.interface'
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccesAction,
} from './actions/getArticle.actions'

const initialState: ArticleStateInterface = {
    errors: null,
    isLoading: false,
    post: null,
    author: null,
    comments: null,
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
        })
    ),

    on(getArticleSuccesAction, (state, { article }): ArticleStateInterface => {
        console.log(article)
        const { author, ...post } = article
        return {
            ...state,
            isLoading: false,
            author,
            post,
        }
    }),
    on(
        getArticleFailureAction,
        (state, { errors }): ArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
            post: null,
            author: null,
        })
    )
)

export const articleFeatureKey = 'article'
