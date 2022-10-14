import { articleFeatureKey } from 'src/app/article/store/reducers'
import { ArticleStateInterface } from 'src/app/article/types/article-state.interface'
import { authFeatureKey } from 'src/app/auth/store/reducers'
import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface'
import { editArticleFeatureKey } from 'src/app/edit-article/store/reducers'
import { EditArticleStateInterface } from 'src/app/edit-article/types/edit-article-state.interface'
import { feedFeatureKey } from '../modules/articles-feed/store/reducers'
import { FeedStateInterface } from '../modules/articles-feed/types/feed-state.interface'
import { profileFeatureKey } from '../modules/profile-info/store/reducers'
import { profileFeatureSelector } from '../modules/profile-info/store/selectors'
import { ProfileStateInterface } from '../modules/profile-info/types/profile-state.interface'

export interface AppStateInterface {
    [authFeatureKey]: AuthStateInterface
    [feedFeatureKey]: FeedStateInterface
    [articleFeatureKey]: ArticleStateInterface
    [editArticleFeatureKey]: EditArticleStateInterface
    [profileFeatureKey]: ProfileStateInterface
}
