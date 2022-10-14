import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { FeedResponseInterface } from '../types/feed-response.interface'
import { TagsResponseInterface } from '../types/tags-response.interface'

const url = environment.API

@Injectable()
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(feedUrl) {
        return this.http.get<FeedResponseInterface>(url + feedUrl)
    }

    getTags() {
        return this.http.get<TagsResponseInterface>(url + 'tags')
    }
}
