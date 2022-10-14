import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { editArticleFeatureKey, editArticleReducer } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { ArticleService } from '../shared/services/article.service'
import { GetArticleEffects } from './store/effects/get-article.effects'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module'
import { NewArticleComponent } from './components/new-article/new-article.component'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { EditFormModule } from '../shared/modules/edit-form/edit-form.module'
import { PostArticleEffects } from './store/effects/post-article.effects'
import { EditArticleService } from './services/edit-article.service'
import { UpdateArticleEffects } from './store/effects/update-article.effects'

const routes = [
    { path: 'new/article', component: NewArticleComponent },
    { path: 'article/:slug/edit', component: EditArticleComponent },
]

@NgModule({
    declarations: [NewArticleComponent, EditArticleComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(editArticleFeatureKey, editArticleReducer),
        EffectsModule.forFeature([
            GetArticleEffects,
            PostArticleEffects,
            UpdateArticleEffects,
        ]),
        AngularMaterialModule,
        BackendErrorsModule,
        EditFormModule,
    ],
    providers: [ArticleService, EditArticleService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditArticleModule {}
