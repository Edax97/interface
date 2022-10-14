import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ArticleFeedInterface } from 'src/app/shared/types/article-feed.interface'

export interface FeedStateInterface {
    isLoading: boolean
    errors: BackendErrorsInterface | null
    currentArticles: ArticleFeedInterface[] | null
    articlesCount: number | null
    tags: string[] | null

    tagsLoading: boolean
    tagsError: BackendErrorsInterface | null

    favLoading: string | null
}
