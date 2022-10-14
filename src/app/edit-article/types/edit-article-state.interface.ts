import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { EditArticleInterface } from './edit-article.interface'

export interface EditArticleStateInterface {
    isLoading: boolean
    errors: BackendErrorsInterface | null
    editArticle: EditArticleInterface | null
    article: ArticleInterface | null
}
