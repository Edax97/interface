import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { FavResponseInterface } from '../types/fav-response.interface'

const api = environment.API

@Injectable()
export class FavoriteService {
    votePost(slug: string, upvoted: boolean): Observable<FavResponseInterface> {
        const favObs = upvoted ? this.unFavPost(slug) : this.favPost(slug)

        return favObs.pipe(
            map(({ article }) => ({
                favorited: article.favorited,
                favoritesCount: article.favoritesCount,
            }))
        )
    }
    favPost(slug: string): Observable<any> {
        return this.http.post<any>(api + 'articles/' + slug + '/favorite', {})
    }

    unFavPost(slug: string): Observable<any> {
        return this.http.delete<any>(api + 'articles/' + slug + '/favorite')
    }

    constructor(private http: HttpClient) {}
}
