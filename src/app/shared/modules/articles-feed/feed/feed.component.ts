import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { favPostAction } from '../store/actions/favPost.actions'
import {
    currentArticlesSelector,
    articlesCountSelector,
    favLoadingSelector,
} from '../store/selectors'

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
    articles$ = this.store.pipe(select(currentArticlesSelector))
    total$ = this.store.pipe(select(articlesCountSelector))
    favLoading$ = this.store.pipe(select(favLoadingSelector))

    @Output() updatePage = new EventEmitter<{ offset: number; size: number }>()
    size = 10
    options = [5, 10, 25, 100]

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {}

    updateFeed(pageEvent: PageEvent) {
        const { pageSize: size, pageIndex: index } = pageEvent
        this.updatePage.emit({ offset: size * index, size })
    }

    onFav(slug: string, upvoted: boolean) {
        this.store.dispatch(favPostAction({ slug, upvoted }))
    }
}
