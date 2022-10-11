import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { FeedResponseInterface } from '../types/feed-response.interface'
import { TagsResponseInterface } from '../types/tags-response.interface'

const url = environment.API

@Injectable()
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(
        offset: number,
        feedUrl = 'feed',
        tag: string | null = null,
        limit = 10
    ) {
        if (feedUrl == 'feed') feedUrl = 'articles/feed'
        if (tag) feedUrl += `?tag=${tag}&`
        return this.http.get<FeedResponseInterface>(
            url + `${feedUrl}?limit=${limit}&offset=${offset}`
        )
    }

    getTags() {
        return this.http.get<TagsResponseInterface>(url + 'tags')
    }
}
