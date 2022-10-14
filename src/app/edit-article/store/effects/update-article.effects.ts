import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ArticleResponseInterface } from 'src/app/shared/types/article-response.interface'
import { EditArticleService } from '../../services/edit-article.service'

import {
    updateArticleAction,
    updateArticleFailureAction,
    updateArticleSuccesAction,
} from '../actions/updateArticle.actions'
import { articleSelector } from '../selectors'

@Injectable()
export class UpdateArticleEffects {
    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateArticleAction),
            withLatestFrom(this.store.select(articleSelector)),
            switchMap(([{ slug, editArticle }, article]) => {
                article = { ...article, ...editArticle }
                console.log('article updated', article)
                return this.editArticleService
                    .updateArticle(slug, article)
                    .pipe(
                        map((res: ArticleResponseInterface) => {
                            console.log('Response', res)
                            return updateArticleSuccesAction({
                                slug: res.article.slug,
                            })
                        }),
                        catchError(({ error }: HttpErrorResponse) =>
                            of(
                                updateArticleFailureAction({
                                    errors: error.errors,
                                })
                            )
                        )
                    )
            })
        )
    )

    redirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(updateArticleSuccesAction),
                tap(({ slug }) => this.router.navigate(['/article', slug]))
            ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppStateInterface>,
        private router: Router,
        private editArticleService: EditArticleService
    ) {}
}
