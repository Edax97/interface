import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ArticleResponseInterface } from 'src/app/shared/types/article-response.interface'
import { EditArticleService } from '../../services/edit-article.service'

import {
    postArticleAction,
    postArticleFailureAction,
    postArticleSuccesAction,
} from '../actions/postArticle.actions'

@Injectable()
export class PostArticleEffects {
    post$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postArticleAction),
            switchMap(({ article }) => {
                console.log('article', article)
                return this.editArticleService.postArticle({ article }).pipe(
                    map((res: ArticleResponseInterface) => {
                        return postArticleSuccesAction({
                            slug: res.article.slug,
                        })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(postArticleFailureAction({ errors: error.errors }))
                    )
                )
            })
        )
    )

    redirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(postArticleSuccesAction),
                tap(({ slug }) => this.router.navigate(['/article', slug]))
            ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private router: Router,
        private editArticleService: EditArticleService
    ) {}
}
