import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RegisterComponent } from './components/register/register.component'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { AngularMaterialModule } from '../shared/modules/angular-material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { authFeatureKey, authReducer } from './store/reducers'
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffects } from './store/effects/register.effects'
import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module'
import { LoginEffects } from './store/effects/login.effects'
import { FetchUserEffects } from './store/effects/fetchUser.effects'
import { UpdateSettingsComponent } from './components/update-settings/update-settings.component'
import { UpdateUserEffects } from './store/effects/update-user.effects'

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'settings',
        component: UpdateSettingsComponent,
    },
]

@NgModule({
    declarations: [RegisterComponent, LoginComponent, UpdateSettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AngularMaterialModule,
        ReactiveFormsModule,
        StoreModule.forFeature(authFeatureKey, authReducer),
        EffectsModule.forFeature([
            RegisterEffects,
            LoginEffects,
            FetchUserEffects,
            UpdateUserEffects,
        ]),
        HttpClientModule,
        BackendErrorsModule,
    ],
    providers: [AuthService],
})
export class AuthModule {}
