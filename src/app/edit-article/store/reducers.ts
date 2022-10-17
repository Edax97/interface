import { createReducer, on } from '@ngrx/store'
import { EditArticleStateInterface } from '../types/edit-article-state.interface'
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccesAction,
} from './actions/getArticle.actions'
import {
    postArticleAction,
    postArticleSuccesAction,
    postArticleFailureAction,
} from './actions/postArticle.actions'
import {
    updateArticleAction,
    updateArticleSuccesAction,
    updateArticleFailureAction,
} from './actions/updateArticle.actions'

const initialState: EditArticleStateInterface = {
    errors: null,
    isLoading: false,
    article: null,
    editArticle: null,
}

export const editArticleReducer = createReducer(
    initialState,

    //get article actions
    on(
        getArticleAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
            article: null,
            editArticle: null,
        })
    ),

    on(
        getArticleSuccesAction,
        (state, { article }): EditArticleStateInterface => {
            const { body, description, title, tagList } = article
            return {
                ...state,
                isLoading: false,
                article,
                editArticle: { body, description, title, tagList },
            }
        }
    ),
    on(
        getArticleFailureAction,
        (state, { errors }): EditArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
        })
    ),

    //post article actions
    on(
        postArticleAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
        })
    ),

    on(postArticleSuccesAction, (state): EditArticleStateInterface => {
        return {
            ...state,
            isLoading: false,
        }
    }),
    on(
        postArticleFailureAction,
        (state, { errors }): EditArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
        })
    ),

    //edit article actions
    on(
        updateArticleAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
        })
    ),

    on(updateArticleSuccesAction, (state): EditArticleStateInterface => {
        return {
            ...state,
            isLoading: false,
            article: null,
        }
    }),
    on(
        updateArticleFailureAction,
        (state, { errors }): EditArticleStateInterface => ({
            ...state,
            errors,
            isLoading: false,
        })
    )
)

export const editArticleFeatureKey = 'editArticle'
