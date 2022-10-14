import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { ArticleService } from 'src/app/shared/services/article.service'
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
                        return getArticleSuccesAction({
                            article: { ...article },
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
        private articleSharedService: ArticleService
    ) {}
}
