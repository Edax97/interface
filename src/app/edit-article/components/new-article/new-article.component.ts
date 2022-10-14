import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { of } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { EditArticleService } from '../../services/edit-article.service'
import { postArticleAction } from '../../store/actions/postArticle.actions'
import { errorsSelector, isLoadingSelector } from '../../store/selectors'
import { EditArticleInterface } from '../../types/edit-article.interface'

@Component({
    templateUrl: './new-article.component.html',
    styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
    isLoading$ = this.store.pipe(select(isLoadingSelector))
    errors$ = this.store.pipe(select(errorsSelector))
    article$ = of(null)

    onSubmit(article: EditArticleInterface) {
        this.store.dispatch(postArticleAction({ article }))
    }

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {}
}
