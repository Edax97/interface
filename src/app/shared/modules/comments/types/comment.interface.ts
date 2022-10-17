import { ProfileInterface } from 'src/app/shared/modules/profile-info/types/profile.interface'
export interface CommentInterface {
    author: ProfileInterface
    body: string
    id: number
    createdAt: string
    updatedAt: string
}
