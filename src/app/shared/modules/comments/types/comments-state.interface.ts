import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { CommentInterface } from './comment.interface'

export interface CommentsStateInterface {
    comments: CommentInterface[] | null
    isLoading: boolean
    deleteLoading: number | null
    errors: BackendErrorsInterface
}
