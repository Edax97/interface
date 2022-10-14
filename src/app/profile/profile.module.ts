import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ArticleService } from '../shared/services/article.service'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { ProfileWallComponent } from './components/profile-wall/profile-wall.component'
import { ArticlesFeedModule } from '../shared/modules/articles-feed/articles-feed.module'
import { TogglerModule } from '../shared/modules/toggler/toggler.module'
import { ProfileInfoModule } from '../shared/modules/profile-info/profile-info.module'

const routes = [{ path: 'profile/:username', component: ProfileWallComponent }]

@NgModule({
    declarations: [ProfileWallComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        //StoreModule.forFeature(articleFeatureKey, articleReducer),
        //EffectsModule.forFeature([GetArticleEffects, DeleteArticleEffects]),
        AngularMaterialModule,
        BackendErrorsModule,
        ArticlesFeedModule,
        TogglerModule,
        ProfileInfoModule,
    ],
    providers: [ArticleService],
})
export class ProfileModule {}
