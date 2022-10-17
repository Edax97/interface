import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ArticleComponent } from './components/article/article.component'
import { StoreModule } from '@ngrx/store'
import { articleFeatureKey, articleReducer } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { ArticleService } from '../shared/services/article.service'
import { GetArticleEffects } from './store/effects/get-article.effects'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module'
import { DeleteArticleEffects } from './store/effects/delete-article.effects'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { ProfileInfoModule } from '../shared/modules/profile-info/profile-info.module'
import { AuthInterceptorService } from '../shared/services/auth-interceptor.service';
import { CommentsModule } from '../shared/modules/comments/comments.module'

const routes = [{ path: ':slug', component: ArticleComponent }]

@NgModule({
    declarations: [ArticleComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(articleFeatureKey, articleReducer),
        EffectsModule.forFeature([GetArticleEffects, DeleteArticleEffects]),
        AngularMaterialModule,
        BackendErrorsModule,
        TagListModule,
        ProfileInfoModule,
        CommentsModule,
    ],
    providers: [
        ArticleService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticleModule {}
