import { ArticleInterface } from 'src/app/shared/types/article.interface'

export interface FeedResponseInterface {
    articles: ArticleInterface[]
    articlesCount: number
}
