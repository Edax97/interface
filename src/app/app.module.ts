import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './components/app/app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component'
import { AngularMaterialModule } from './shared/modules/angular-material.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { FetchUserModule } from './shared/modules/fetch-user/fetch-user.module'
import { AuthModule } from './auth/auth.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './shared/services/auth-interceptor.service'
import { FeedModule } from './feed/feed.module'

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        FetchUserModule,
        AuthModule,
        FeedModule,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
