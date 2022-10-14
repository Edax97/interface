import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ArticleResponseInterface } from '../types/article-response.interface'
import { ArticleInterface } from '../types/article.interface'

const api = environment.API

@Injectable()
export class ArticleService {
    getArticle(slug: string) {
        return this.http
            .get<ArticleResponseInterface>(api + 'articles/' + slug)
            .pipe(map(({ article }) => article))
    }

    deleteArticle(slug: string) {
        return this.http
            .delete<any>(api + 'articles/' + slug)
            .pipe(tap((res) => console.log(res)))
    }

    constructor(private http: HttpClient) {}
}
