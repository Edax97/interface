import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { favArticleAction } from 'src/app/article/store/actions/favArticle'
import { FavoriteService } from 'src/app/shared/services/favorite.service'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import {
    favPostAction,
    favPostFailureAction,
    favPostSuccessAction,
} from '../actions/favPost.actions'

@Injectable()
export class FavPostEffects {
    fav$ = createEffect(() =>
        this.actions$.pipe(
            ofType(favPostAction),
            switchMap(({ slug, upvoted }) =>
                this.favService.votePost(slug, upvoted).pipe(
                    map(({ favorited, favoritesCount }) => {
                        this.store.dispatch(
                            favArticleAction({ favorited, favoritesCount })
                        )
                        return favPostSuccessAction({
                            favorited,
                            favoritesCount,
                        })
                    }),
                    catchError(({ error }: HttpErrorResponse) =>
                        of(favPostFailureAction({ errors: error.errors }))
                    )
                )
            )
        )
    )
    constructor(
        private actions$: Actions,
        private favService: FavoriteService,
        private store: Store<AppStateInterface>
    ) {}
}
