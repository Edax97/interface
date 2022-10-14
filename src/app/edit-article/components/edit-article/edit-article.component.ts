import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { getArticleAction } from '../../store/actions/getArticle.actions'
import { updateArticleAction } from '../../store/actions/updateArticle.actions'
import {
    articleSelector,
    editArticleSelector,
    errorsSelector,
    isLoadingSelector,
} from '../../store/selectors'
import { EditArticleInterface } from '../../types/edit-article.interface'

@Component({
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
    slug: string
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    article$ = this.store.pipe(select(articleSelector))
    editArticle$ = this.store.pipe(select(editArticleSelector))

    initializeValues() {
        this.slug = this.route.snapshot.params['slug']
        this.store.dispatch(getArticleAction({ slug: this.slug }))
    }

    constructor(
        private store: Store<AppStateInterface>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initializeValues()
    }

    onSubmit(editArticle: EditArticleInterface) {
        this.store.dispatch(
            updateArticleAction({ slug: this.slug, editArticle })
        )
    }
}
