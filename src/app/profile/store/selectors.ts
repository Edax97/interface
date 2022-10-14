import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ArticleStateInterface } from '../types/article-state.interface'

export const articleFeatureSelector = (
    state: AppStateInterface
): ArticleStateInterface => state.article

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface): boolean | null =>
        articleState?.isLoading
)

export const errorsSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState?.errors
)

export const articleSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState?.article
)

export const commentsSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState?.comments
)
