import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { loginAction } from '../../store/actions/login.actions'
import { errorsSelector, isSubmittingSelector } from '../../store/selectors'

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>
    errors$: Observable<BackendErrorsInterface>

    constructor(private store: Store<AppStateInterface>) {}

    initializeForm(): void {
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        })
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.errors$ = this.store.pipe(select(errorsSelector))
    }

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    onSubmit() {
        if (this.form.invalid) return
        this.store.dispatch(loginAction({ request: this.form.value }))
    }
}
