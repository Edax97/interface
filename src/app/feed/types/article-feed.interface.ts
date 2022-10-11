export interface ArticleFeedInterface {
    author: {
        following: boolean
        image: string | null
        username: string
    }
    createdAt: string
    description: string
    favorited: boolean
    favoritesCount: number
    slug: string
    tagList: string[]
    title: string
    updatedAt: string
}
