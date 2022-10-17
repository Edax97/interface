import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { CommentPostInterface } from '../types/comment-post.interface'
import { CommentInterface } from '../types/comment.interface'
import { CommentsResponseInterface } from '../types/comments-response.interface'

const url = environment.API + 'articles/'

@Injectable()
export class CommentsService {
    constructor(private http: HttpClient) {}

    getComments(slug: string) {
        return this.http.get<CommentsResponseInterface>(
            url + slug + '/comments'
        )
    }

    postComment(slug: string, comment: CommentPostInterface) {
        return this.http.post<{ comment: CommentInterface }>(
            url + slug + '/comments',
            { comment }
        )
    }
    deleteComment(slug: string, id: number) {
        return this.http.delete(url + slug + '/comments/' + id)
    }
}
