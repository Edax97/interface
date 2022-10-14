import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ArticleService } from 'src/app/shared/services/article.service'
import {
    deleteArticleAction,
    deleteArticleSuccesAction,
} from '../actions/deleteArticle.actions'
import { getArticleFailureAction } from '../actions/getArticle.actions'

@Injectable()
export class DeleteArticleEffects {
    delete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteArticleAction),
            switchMap(({ slug }) =>
                this.articleSharedService.deleteArticle(slug).pipe(
                    map((res) => {
                        console.log('Response', res)
                        return deleteArticleSuccesAction()
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(getArticleFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )
    redirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(deleteArticleSuccesAction),
                tap(() => this.router.navigate(['/']))
            ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private router: Router,
        private articleSharedService: ArticleService
    ) {}
}
