import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { CurrentUserInterface } from './current-user.interface'

export interface AuthStateInterface {
    isSubmitting: boolean
    isLogged: boolean | null
    errors: BackendErrorsInterface | null
    currentUser: CurrentUserInterface | null
    isLoading: boolean
}
