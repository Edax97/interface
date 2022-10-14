import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, Subscription, tap } from 'rxjs'
import { isLoggedSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { favPostAction } from 'src/app/shared/modules/articles-feed/store/actions/favPost.actions'
import { getFeedAction } from 'src/app/shared/modules/articles-feed/store/actions/getFeed.actions'
import { getTagsAction } from 'src/app/shared/modules/articles-feed/store/actions/getTags.actions'
import {
    articlesCountSelector,
    currentArticlesSelector,
    errorsSelector,
    favLoadingSelector,
    isLoadingSelector,
    tagsErrorSeletor,
    tagsLoadingSelector,
    tagsSelector,
} from 'src/app/shared/modules/articles-feed/store/selectors'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    page: string
    isLogged$ = this.store.pipe(select(isLoggedSelector))
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))

    tag: string | null = null
    tagList$ = this.store.pipe(select(tagsSelector))
    tagSLoading$ = this.store.pipe(select(tagsLoadingSelector))
    tagsErrors$ = this.store.pipe(select(tagsErrorSeletor))

    paramsSubs: Subscription

    constructor(
        private store: Store<AppStateInterface>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initializeValues()
    }

    initializeValues() {
        this.paramsSubs = combineLatest([
            this.route.params,
            this.route.queryParams,
        ])
            .pipe(
                tap(([params, query]) => {
                    this.page = params['page'] || 'articles'
                    this.tag = query['tag'] || null
                    this.updatePage({ size: 10, offset: 0 })
                })
            )
            .subscribe(() => {})
        this.store.dispatch(getTagsAction())
    }

    updatePage({ size, offset }) {
        let url = 'articles'
        if (this.page == 'feed') url = 'articles/feed'
        url += `?limit=${size}&offset=${offset}`

        if (this.tag) url += `&tag=${this.tag}`

        this.store.dispatch(
            getFeedAction({
                feedUrl: url,
            })
        )
    }

    ngOnDestroy(): void {
        this.paramsSubs.unsubscribe()
    }
}
