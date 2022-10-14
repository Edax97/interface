import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { DateService } from 'src/app/shared/services/date.service'
import { FeedService } from '../../services/feed.service'
import { FeedResponseInterface } from '../../types/feed-response.interface'
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
} from '../actions/getFeed.actions'

@Injectable()
export class GetFeedEffects {
    getFeed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getFeedAction),
            switchMap(({ feedUrl }) =>
                this.feedService.getFeed(feedUrl).pipe(
                    map((feedResponse: FeedResponseInterface) => {
                        const { articles, articlesCount } = feedResponse
                        const feedArticles = articles.map((ar) => {
                            const { body, ...article } = ar
                            article.updatedAt = this.date.formatDate(
                                article.updatedAt
                            )
                            return article
                        })
                        const feed = { articles: feedArticles, articlesCount }
                        return getFeedSuccessAction({ feed })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getFeedFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private feedService: FeedService,
        private date: DateService
    ) {}
}
