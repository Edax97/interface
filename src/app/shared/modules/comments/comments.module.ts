import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularMaterialModule } from '../angular-material.module'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CommentsComponent } from './comments/comments.component'
import { commentsFeatureKey, commentsReducer } from './store/reducers'
import { GetCommentsEffects } from './store/effects/get-comments.effects'
import { CommentsService } from './services/comments.service'
import { PostCommentEffects } from './store/effects/post-comment.effects'
import { CreateCommentComponent } from './create-comment/create-comment.component'
import { ReactiveFormsModule } from '@angular/forms'
import { DeleteCommentEffects } from './store/effects/delete-comment.effects'

@NgModule({
    declarations: [CommentsComponent, CreateCommentComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule.forChild([]),
        StoreModule.forFeature(commentsFeatureKey, commentsReducer),
        EffectsModule.forFeature([
            GetCommentsEffects,
            PostCommentEffects,
            DeleteCommentEffects,
        ]),
        ReactiveFormsModule,
    ],
    exports: [CommentsComponent, CreateCommentComponent],
    providers: [CommentsService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommentsModule {}
