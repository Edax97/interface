import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { PostInterface } from './post.interface'
import { AuthorInterface } from './author.interface'
import { CommentInterface } from './comment.interface'

export interface ArticleStateInterface {
    isLoading: boolean
    errors: BackendErrorsInterface | null
    post: PostInterface | null
    author: AuthorInterface | null
    comments: CommentInterface[] | null
}
