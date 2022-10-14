import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ProfileInterface } from './profile.interface'

export interface ProfileStateInterface {
    isLoading: boolean
    profile: ProfileInterface | null
    errors: BackendErrorsInterface | null
    followLoading: boolean
}
