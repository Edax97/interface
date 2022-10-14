import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ArticleFeedInterface } from 'src/app/shared/types/article-feed.interface'
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

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface): boolean | null => feedState?.isLoading
)

export const tagsLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface): boolean | null => feedState?.tagsLoading
)

export const favLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.favLoading
)

export const errorsSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.errors
)

export const tagsErrorSeletor = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState?.tagsError
)
