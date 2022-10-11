import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ArticleFeedInterface } from './article-feed.interface'

export interface FeedStateInterface {
    isLoading: boolean
    errors: BackendErrorsInterface | null
    currentArticles: ArticleFeedInterface[] | null
    articlesCount: number | null
    tags: string[] | null
    page: string | null
    tagPage: string | null
    tagsLoading: boolean
    tagsError: BackendErrorsInterface | null
}
