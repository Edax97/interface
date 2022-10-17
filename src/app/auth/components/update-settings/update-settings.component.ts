import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { logoutAction } from '../../store/actions/logout.actions'
import { updateUserAction } from '../../store/actions/update-user.actions'
import {
    currentUserSelector,
    errorsSelector,
    isSubmittingSelector,
} from '../../store/selectors'
import { CurrentUserInterface } from '../../types/current-user.interface'

@Component({
    templateUrl: './update-settings.component.html',
    styleUrls: ['./update-settings.component.scss'],
})
export class UpdateSettingsComponent implements OnInit {
    errors$ = this.store.pipe(select(errorsSelector))
    isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    currentUser$ = this.store.pipe(select(currentUserSelector))

    form: FormGroup
    currentUser: CurrentUserInterface

    constructor(private store: Store<AppStateInterface>) {
        this.initForm()
    }

    retrieveUser() {
        this.currentUser$.subscribe((user: CurrentUserInterface) => {
            if (!user) return
            this.currentUser = user
            this.updateForm()
        })
    }

    initForm() {
        this.form = new FormGroup({
            image: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            bio: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        })
    }

    updateForm() {
        this.form.patchValue(this.currentUser)
    }

    onSubmit() {
        this.store.dispatch(updateUserAction({ user: this.form.value }))
    }

    onLogout() {
        this.store.dispatch(logoutAction())
    }

    ngOnInit(): void {
        this.retrieveUser()
    }
}
