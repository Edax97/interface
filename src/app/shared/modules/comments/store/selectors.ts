import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { CommentInterface } from '../types/comment.interface'
import { CommentsStateInterface } from '../types/comments-state.interface'

export const commentsFeatureSelector = (
    state: AppStateInterface
): CommentsStateInterface => state.comments

export const commentsSelector = createSelector(
    commentsFeatureSelector,
    (commentsState: CommentsStateInterface): CommentInterface[] =>
        commentsState?.comments
)

export const isLoadingSelector = createSelector(
    commentsFeatureSelector,
    (commentsState: CommentsStateInterface): boolean => commentsState?.isLoading
)

export const errorsSelector = createSelector(
    commentsFeatureSelector,
    (commentsState: CommentsStateInterface) => commentsState?.errors
)

export const deleteLoadingSelector = createSelector(
    commentsFeatureSelector,
    (commentsState: CommentsStateInterface) => commentsState?.deleteLoading
)
