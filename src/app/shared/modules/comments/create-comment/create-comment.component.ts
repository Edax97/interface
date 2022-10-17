import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/auth/types/current-user.interface'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { postCommentAction } from '../store/actions/post-comment.actions'
import { isLoadingSelector } from '../store/selectors'

@Component({
    selector: 'mc-create-comment',
    templateUrl: './create-comment.component.html',
    styleUrls: ['./create-comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCommentComponent implements OnInit {
    @Input() slug: string
    form: FormGroup
    currentUser$: Observable<CurrentUserInterface>
    isLoading$: Observable<boolean>

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    initializeForm() {
        this.form = new FormGroup({
            body: new FormControl('', Validators.required),
        })
    }

    initializeValues() {
        this.currentUser$ = this.store.pipe(select(currentUserSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    }

    onPostComment() {
        console.log('Comment', this.form.value)
        this.store.dispatch(
            postCommentAction({ slug: this.slug, postComment: this.form.value })
        )
        this.clearForm()
    }

    clearForm() {
        this.form.patchValue({ body: '' })
    }
}
