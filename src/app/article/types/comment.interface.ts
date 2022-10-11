import { AuthorInterface } from './author.interface'

export interface CommentInterface {
    author: AuthorInterface
    date: string
    body: string
}
