import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { environment } from 'src/environments/environment'

const api = environment.API

@Injectable()
export class ArticleService {
    getArticle(slug: string) {
        return this.http
            .get<any>(api + 'articles/' + slug)
            .pipe(map(({ article }) => article))
    }

    constructor(private http: HttpClient) {}
}
