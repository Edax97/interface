import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './feed/feed.component'
import { AngularMaterialModule } from '../angular-material.module'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { FavPostEffects } from './store/effects/favPost.effects'
import { GetFeedEffects } from './store/effects/getFeed.effects'
import { GetTagsEffects } from './store/effects/getTags.effects'
import { feedFeatureKey, feedReducer } from './store/reducers'
import { FavoriteService } from 'src/app/shared/services/favorite.service'
import { FeedService } from './services/feed.service'

@NgModule({
    declarations: [FeedComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule.forChild([]),
        StoreModule.forFeature(feedFeatureKey, feedReducer),
        EffectsModule.forFeature([
            GetFeedEffects,
            GetTagsEffects,
            FavPostEffects,
        ]),
    ],
    exports: [FeedComponent],
    providers: [FavoriteService, FeedService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticlesFeedModule {}
