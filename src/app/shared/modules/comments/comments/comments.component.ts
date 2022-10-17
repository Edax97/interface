import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { deleteCommentAction } from '../store/actions/delete-comment.actions'
import {
    getCommentsAction,
    getCommentsFailureAction,
} from '../store/actions/get-comments.actions'
import {
    commentsSelector,
    deleteLoadingSelector,
    isLoadingSelector,
} from '../store/selectors'
import { CommentInterface } from '../types/comment.interface'

@Component({
    selector: 'mc-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
    @Input() slug: string
    comments$: Observable<CommentInterface[]>
    isLoading$: Observable<boolean>
    deleteLoading$: Observable<number | null>
    currentUsername$: Observable<string>

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.initializeValues()
        this.initialActions()
    }

    initializeValues() {
        console.log('Slug', this.slug)
        this.comments$ = this.store.pipe(select(commentsSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.deleteLoading$ = this.store.pipe(select(deleteLoadingSelector))
        this.currentUsername$ = this.store
            .pipe(select(currentUserSelector))
            .pipe(map((cU) => cU.username))
    }
    initialActions() {
        this.store.dispatch(getCommentsAction({ slug: this.slug }))
    }

    onDelete(id: number) {
        this.store.dispatch(deleteCommentAction({ id, slug: this.slug }))
    }
}
