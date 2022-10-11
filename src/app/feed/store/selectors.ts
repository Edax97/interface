import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ArticleFeedInterface } from '../types/article-feed.interface'
import { FeedStateInterface } from '../types/feed-state.interface'

export const feedFeatureSelector = (
    state: AppStateInterface
): FeedStateInterface => state.feed

export const currentArticlesSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface): ArticleFeedInterface[] =>
        feedState?.currentArticles
)

export const articlesCountSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.articlesCount
)

export const tagsSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.tags
)

export const pageSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.page
)

export const tagPageSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.tagPage
)

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface): boolean | null => feedState?.isLoading
)

export const errorsSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.errors
)
