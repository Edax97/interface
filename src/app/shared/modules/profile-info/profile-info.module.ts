import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularMaterialModule } from '../angular-material.module'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { profileFeatureKey, profileReducer } from './store/reducers'
import { StoreModule } from '@ngrx/store'
import { ProfileService } from '../../services/profile.service'
import { GetProfileEffects } from './store/effects/getProfile.effects'
import { BackendErrorsModule } from '../backend-errors/backend-errors.module'
import { FollowEffects } from './store/effects/follow.effects'
import { ProfileInfoComponent } from './components/profile-info/profile-info.component'
import { ProfileBannerComponent } from './components/profile-banner/profile-banner.component'

@NgModule({
    declarations: [ProfileInfoComponent, ProfileBannerComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule.forChild([]),
        EffectsModule.forFeature([GetProfileEffects, FollowEffects]),
        StoreModule.forFeature(profileFeatureKey, profileReducer),
        BackendErrorsModule,
    ],
    exports: [ProfileInfoComponent, ProfileBannerComponent],
    providers: [ProfileService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileInfoModule {}
