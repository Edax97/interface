import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { TogglerModule } from '../shared/modules/toggler/toggler.module'
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module'
import { ArticlesFeedModule } from '../shared/modules/articles-feed/articles-feed.module'
import { StoreModule } from '@ngrx/store'

const routes: Routes = [{ path: 'feed/:page', component: HomeComponent }]

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        //StoreModule.forFeature(),
        AngularMaterialModule,
        BannerModule,
        BackendErrorsModule,
        TagListModule,
        TogglerModule,
        ArticlesFeedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedModule {}
