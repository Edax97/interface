import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    Input,
} from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subscription, Observable, combineLatest, map } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { followAction } from '../../store/actions/follow.actions'
import { getProfileAction } from '../../store/actions/getProfile.actions'
import {
    profileSelector,
    isLoadingSelector,
    errorsSelector,
    followLoadingSelector,
} from '../../store/selectors'

@Component({
    selector: 'mc-profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoComponent implements OnInit {
    usernameSubs: Subscription
    @Input('username') username$!: Observable<string>
    profile$ = this.store.pipe(select(profileSelector))
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    followLoading$ = this.store.pipe(select(followLoadingSelector))
    currentUser$ = this.store.pipe(select(currentUserSelector))
    isAuthor$: Observable<boolean>

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.initializeValues()
    }

    initializeValues() {
        this.usernameSubs = this.username$.subscribe((username) => {
            this.store.dispatch(getProfileAction({ username }))
        })
        this.isAuthor$ = combineLatest([
            this.username$,
            this.currentUser$,
        ]).pipe(
            map(([username, currentUser]) => {
                console.log(username, currentUser.username)
                if (!username || !currentUser) return false
                return username == currentUser.username
            })
        )
    }

    onFollow(username: string, following: boolean) {
        this.store.dispatch(followAction({ username, following }))
    }

    ngOnDestroy(): void {
        this.usernameSubs.unsubscribe()
    }
}
