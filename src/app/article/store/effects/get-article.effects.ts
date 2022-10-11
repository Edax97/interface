import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { marked } from 'marked'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ArticleService } from 'src/app/shared/services/article.service'
import { DateService } from 'src/app/shared/services/date.service'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccesAction,
} from '../actions/getArticle.actions'

@Injectable()
export class GetArticleEffects {
    getArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getArticleAction),
            switchMap(({ slug }) =>
                this.articleSharedService.getArticle(slug).pipe(
                    map((article: ArticleInterface) => {
                        const updatedAt = this.dateService.formatDate(
                            article.updatedAt
                        )
                        const body = marked.parse(article.body)
                        console.log('articleRes', article)
                        return getArticleSuccesAction({
                            article: { ...article, updatedAt, body },
                        })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getArticleFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private articleSharedService: ArticleService,
        private dateService: DateService
    ) {}
}
