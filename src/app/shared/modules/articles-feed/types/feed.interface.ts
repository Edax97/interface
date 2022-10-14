import { ArticleFeedInterface } from 'src/app/shared/types/article-feed.interface'

export interface FeedInterface {
    articles: ArticleFeedInterface[]
    articlesCount: number
}
