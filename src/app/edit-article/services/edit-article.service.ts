import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs'
import { ArticleResponseInterface } from 'src/app/shared/types/article-response.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { NewArticlePayloadInterface } from 'src/app/shared/types/new-article-payload.interface'
import { environment } from 'src/environments/environment'

const api = environment.API

@Injectable()
export class EditArticleService {
    updateArticle(slug: string, article: ArticleInterface) {
        return this.http.put<ArticleResponseInterface>(
            api + '/articles/' + slug,
            { article }
        )
    }

    postArticle(data: NewArticlePayloadInterface) {
        console.log('Post article')
        return this.http
            .post<ArticleResponseInterface>(api + 'articles/', data)
            .pipe(
                tap((res) => {
                    console.log('response', res)
                })
            )
    }

    constructor(private http: HttpClient) {
        console.log('START EDIT ARTICLE SERVICE')
    }
}
