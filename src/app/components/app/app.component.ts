import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { fetchUserAction } from 'src/app/auth/store/actions/fetchUser.actions'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'medium-clone'

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.store.dispatch(fetchUserAction())
    }
}
