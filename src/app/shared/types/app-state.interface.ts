import { authFeatureKey } from 'src/app/auth/store/reducers'
import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface'
import { feedFeatureKey } from 'src/app/feed/store/reducers'
import { FeedStateInterface } from 'src/app/feed/types/feed-state.interface'

export interface AppStateInterface {
    [authFeatureKey]: AuthStateInterface
    [feedFeatureKey]: FeedStateInterface
}
