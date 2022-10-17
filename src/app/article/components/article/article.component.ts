import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, filter, map, Observable, Subscription, tap } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/auth/types/current-user.interface'
import { favPostAction } from 'src/app/shared/modules/articles-feed/store/actions/favPost.actions'
import { favLoadingSelector } from 'src/app/shared/modules/articles-feed/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { deleteArticleAction } from '../../store/actions/deleteArticle.actions'
import { getArticleAction } from '../../store/actions/getArticle.actions'
import {
    errorsSelector,
    isLoadingSelector,
    articleSelector,
} from '../../store/selectors'

@Component({
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
    slug: string
    showComments = false

    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    article$ = this.store.pipe(select(articleSelector))
    tags$ = this.article$.pipe(map((article) => article.tagList))

    favLoading$ = this.store.pipe(select(favLoadingSelector))

    currentUser$ = this.store.pipe(select(currentUserSelector))
    isAuthor$: Observable<boolean>

    username$ = this.article$.pipe(
        filter((article) => article != null),
        map((article) => article.author.username)
    )

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppStateInterface>
    ) {
        this.initializeValues()
        this.initActions(this.slug)
    }

    initializeValues() {
        this.slug = this.route.snapshot.params['slug']
        this.isAuthor$ = combineLatest([this.article$, this.currentUser$]).pipe(
            map(
                ([article, currentUser]: [
                    ArticleInterface,
                    CurrentUserInterface
                ]) => {
                    if (!article || !currentUser) return false
                    return article.author.username == currentUser.username
                }
            )
        )
    }

    initActions(slug: string) {
        this.store.dispatch(getArticleAction({ slug }))
    }

    onDelete() {
        this.store.dispatch(deleteArticleAction({ slug: this.slug }))
    }

    onFav(slug: string, upvoted: boolean) {
        this.store.dispatch(favPostAction({ slug, upvoted }))
    }

    ngOnInit(): void {}
}
