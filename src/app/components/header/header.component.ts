import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { catchError, map, Observable, of, tap } from 'rxjs'
import { logoutAction } from 'src/app/auth/store/actions/logout.actions'
import {
    currentUserSelector,
    isLoggedSelector,
} from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/auth/types/current-user.interface'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    onLogout() {
        this.store.dispatch(logoutAction())
    }
    username$: Observable<string>
    isLogged$: Observable<boolean>
    constructor(private store: Store<AppStateInterface>) {}
    initializeValues() {
        this.isLogged$ = this.store.pipe(
            select(isLoggedSelector),
            catchError(() => of(null))
        )

        this.username$ = this.store.pipe(
            select(currentUserSelector),
            map((currentUser: CurrentUserInterface) => currentUser.username),
            catchError(() => of(null))
        )
    }

    ngOnInit(): void {
        this.initializeValues()
    }
}
