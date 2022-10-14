import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { select, Store } from '@ngrx/store'
import { combineLatest, map, Observable, Subscription } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { followAction } from '../../store/actions/follow.actions'
import { getProfileAction } from '../../store/actions/getProfile.actions'
import {
    errorsSelector,
    followLoadingSelector,
    isLoadingSelector,
    profileSelector,
} from '../../store/selectors'
import { ProfileInterface } from '../../types/profile.interface'

@Component({
    selector: 'mc-profile-banner',
    templateUrl: './profile-banner.component.html',
    styleUrls: ['./profile-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileBannerComponent implements OnInit {
    usernameSubs: Subscription
    @Input('username') username$!: Observable<string>
    profile$ = this.store.pipe(select(profileSelector))
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    followLoading$ = this.store.pipe(select(followLoadingSelector))

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.initializeValues()
    }

    initializeValues() {
        this.usernameSubs = this.username$.subscribe((username) => {
            console.log('Username')
            this.store.dispatch(getProfileAction({ username }))
        })
    }

    onFollow(username: string, following: boolean) {
        this.store.dispatch(followAction({ username, following }))
    }

    ngOnDestroy(): void {
        this.usernameSubs.unsubscribe()
    }
}
