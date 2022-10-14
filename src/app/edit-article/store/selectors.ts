import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { EditArticleStateInterface } from '../types/edit-article-state.interface'

export const articleFeatureSelector = (
    state: AppStateInterface
): EditArticleStateInterface => state.editArticle

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (editArticleState: EditArticleStateInterface): boolean | null =>
        editArticleState?.isLoading
)

export const errorsSelector = createSelector(
    articleFeatureSelector,
    (editArticleState: EditArticleStateInterface) => editArticleState?.errors
)

export const articleSelector = createSelector(
    articleFeatureSelector,
    (editArticleState: EditArticleStateInterface) => editArticleState?.article
)

export const editArticleSelector = createSelector(
    articleFeatureSelector,
    (editArticleState: EditArticleStateInterface) =>
        editArticleState?.editArticle
)
