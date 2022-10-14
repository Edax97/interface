import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import {
    Subscription,
    combineLatest,
    tap,
    Subject,
    BehaviorSubject,
} from 'rxjs'
import { isLoggedSelector } from 'src/app/auth/store/selectors'
import { getFeedAction } from 'src/app/shared/modules/articles-feed/store/actions/getFeed.actions'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import {
    isLoadingSelector,
    errorsSelector,
} from 'src/app/shared/modules/articles-feed/store/selectors'
import { getProfileAction } from 'src/app/shared/modules/profile-info/store/actions/getProfile.actions'

@Component({
    templateUrl: './profile-wall.component.html',
    styleUrls: ['./profile-wall.component.scss'],
})
export class ProfileWallComponent implements OnInit {
    username: string | null = null

    usernameSubject = new BehaviorSubject<string>('')
    username$ = this.usernameSubject.asObservable()

    isLogged$ = this.store.pipe(select(isLoggedSelector))
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))

    fav: string | null = null

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
                    this.username = params['username'] || null
                    this.fav = query['fav'] || null
                    this.updatePage({ size: 10, offset: 0 })
                    this.usernameSubject.next(this.username)
                })
            )
            .subscribe(() => {})
    }

    updatePage({ size, offset }) {
        let url = 'articles'
        if (this.fav) {
            url += `?favorited=${this.username}`
        } else {
            url += `?author=${this.username}`
        }
        url += `&limit=${size}&offset=${offset}`
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
