import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { PostInterface } from './post.interface'
import { CommentInterface } from './comment.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

export interface ArticleStateInterface {
    isLoading: boolean
    errors: BackendErrorsInterface | null
    article: ArticleInterface | null
    comments: CommentInterface[] | null
}
