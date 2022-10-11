import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { filter, map, Observable } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { registerAction } from '../../store/actions/register.actions'
import { errorsSelector, isSubmittingSelector } from '../../store/selectors'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>
    errors$: Observable<BackendErrorsInterface>

    constructor(private store: Store<AppStateInterface>) {}

    initializeForm() {
        this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        })
    }
    initializeValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.errors$ = this.store.pipe(select(errorsSelector))
    }

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    onSubmit(): void {
        console.log('Submit', this.form.value, this.form.valid)
        if (this.form.invalid) return
        this.store.dispatch(registerAction({ request: this.form.value }))
    }
}
