import { createReducer, on } from '@ngrx/store'
import { CommentsStateInterface } from '../types/comments-state.interface'
import {
    deleteCommentAction,
    deleteCommentFailureAction,
    deleteCommentSuccessAction,
} from './actions/delete-comment.actions'
import {
    getCommentsAction,
    getCommentsFailureAction,
    getCommentsSuccessAction,
} from './actions/get-comments.actions'
import {
    postCommentAction,
    postCommentFailureAction,
    postCommentSuccessAction,
} from './actions/post-comment.actions'

const initialState: CommentsStateInterface = {
    errors: null,
    isLoading: false,
    comments: null,
    deleteLoading: null,
}

export const commentsReducer = createReducer(
    initialState,

    //getComments actions
    on(
        getCommentsAction,
        (state): CommentsStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
            comments: null,
        })
    ),

    on(
        getCommentsSuccessAction,
        (state, { comments }): CommentsStateInterface => ({
            ...state,
            isLoading: false,
            comments,
        })
    ),
    on(
        getCommentsFailureAction,
        (state): CommentsStateInterface => ({
            ...state,
            isLoading: false,
        })
    ),

    //post comment actions
    on(
        postCommentAction,
        (state): CommentsStateInterface => ({
            ...state,
            isLoading: true,
            errors: null,
        })
    ),

    on(
        postCommentSuccessAction,
        (state, { comment }): CommentsStateInterface => {
            if (!state.comments) return { ...state, isLoading: false }
            return {
                ...state,
                isLoading: false,
                comments: [comment, ...state.comments],
            }
        }
    ),
    on(
        postCommentFailureAction,
        (state): CommentsStateInterface => ({
            ...state,
            isLoading: false,
        })
    ),

    //post comment actions
    on(
        deleteCommentAction,
        (state, { id }): CommentsStateInterface => ({
            ...state,
            deleteLoading: id,
            errors: null,
        })
    ),

    on(deleteCommentSuccessAction, (state, { id }): CommentsStateInterface => {
        const comments = state.comments.filter((c) => c.id != id)
        return {
            ...state,
            deleteLoading: null,
            comments,
        }
    }),
    on(
        deleteCommentFailureAction,
        (state): CommentsStateInterface => ({
            ...state,
            deleteLoading: null,
        })
    )
)

export const commentsFeatureKey = 'comments'
