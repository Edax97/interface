import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { FeedService } from './services/feed.service'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { feedFeatureKey, feedReducer } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffects } from './store/effects/getFeed.effects'
import { FeedComponent } from './components/feed/feed.component'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { GetTagsEffects } from './store/effects/getTags.effects'
import { TogglerModule } from '../shared/modules/toggler/toggler.module'

const routes: Routes = [
    { path: 'feed/:page', component: HomeComponent },
    { path: 'tag-feed/:tag', component: HomeComponent },
]

@NgModule({
    declarations: [HomeComponent, FeedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        StoreModule.forFeature(feedFeatureKey, feedReducer),
        EffectsModule.forFeature([GetFeedEffects, GetTagsEffects]),
        AngularMaterialModule,
        BannerModule,
        TagListModule,
        TogglerModule,
    ],
    providers: [FeedService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedModule {}
