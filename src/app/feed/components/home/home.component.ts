import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { tap } from 'rxjs'
import { isLoggedSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { getFeedAction } from '../../store/actions/getFeed.actions'
import { getTagsAction } from '../../store/actions/getTags.actions'
import {
    articlesCountSelector,
    currentArticlesSelector,
    tagPageSelector,
    tagsSelector,
} from '../../store/selectors'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    tag: string
    page: string
    articles$ = this.store.pipe(select(currentArticlesSelector))
    total$ = this.store.pipe(select(articlesCountSelector))
    isLogged$ = this.store.pipe(select(isLoggedSelector))
    tagList$ = this.store.pipe(select(tagsSelector))
    tag$ = this.store.pipe(select(tagPageSelector))

    constructor(
        private store: Store<AppStateInterface>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initFeed()
        this.store.dispatch(getTagsAction())
    }

    initFeed() {
        this.route.params
            .pipe(
                tap((params) => {
                    this.page = params['page'] || 'articles'
                    this.tag = params['tag'] || null
                    console.log('Params', this.page, this.tag)
                    this.store.dispatch(
                        getFeedAction({
                            offset: 0,
                            feedUrl: this.page,
                            tag: this.tag,
                            limit: 10,
                        })
                    )
                })
            )
            .subscribe(() => {})
    }

    updatePage({ size, offset }) {
        this.store.dispatch(
            getFeedAction({
                offset,
                feedUrl: this.page,
                tag: this.tag,
                limit: size,
            })
        )
    }
}
