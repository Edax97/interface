import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Subscription, tap } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { getArticleAction } from '../../store/actions/getArticle.actions'
import {
    authorSelector,
    commentsSelector,
    errorsSelector,
    isLoadingSelector,
    postSelector,
} from '../../store/selectors'

@Component({
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
    subs: Subscription

    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    post$ = this.store.pipe(select(postSelector))
    author$ = this.store.pipe(select(authorSelector))
    comments$ = this.store.pipe(select(commentsSelector))

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppStateInterface>
    ) {
        this.getParams()
    }

    getParams() {
        this.subs = this.route.params
            .pipe(
                tap((params) => {
                    console.log(params)
                    this.initActions(params['slug'])
                })
            )
            .subscribe()
    }

    initActions(slug: string) {
        this.store.dispatch(getArticleAction({ slug }))
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.subs.unsubscribe()
    }
}
