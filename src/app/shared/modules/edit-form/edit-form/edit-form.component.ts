import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { filter, Observable, Subscription, tap } from 'rxjs'
import { EditArticleInterface } from 'src/app/edit-article/types/edit-article.interface'

@Component({
    selector: 'mc-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFormComponent implements OnInit, OnDestroy {
    @Input('loading') isLoading$: Observable<boolean>
    @Input() header: string
    @Input('article') editArticle$: Observable<EditArticleInterface | null>
    @Output('submitPost') sendArticle = new EventEmitter<EditArticleInterface>()
    form: FormGroup
    editSubs: Subscription

    initializeForm() {
        this.form = new FormGroup({
            title: new FormControl('', Validators.required),
            body: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            tagList: new FormControl(''),
        })
        this.editSubs = this.editArticle$
            .pipe(
                filter((v) => v != null),
                tap((article) => {
                    console.log(article)
                    this.form.patchValue({
                        ...article,
                        tagList: article.tagList.join(' '),
                    })
                })
            )
            .subscribe()
    }

    onSubmit() {
        const tagList = this.form.value.tagList
            ? this.form.value.tagList.split(' ')
            : []
        const article = { ...this.form.value, tagList }
        this.sendArticle.emit(article)
    }

    constructor() {}

    ngOnInit(): void {
        this.initializeForm()
    }

    ngOnDestroy(): void {
        this.editSubs.unsubscribe()
    }
}
