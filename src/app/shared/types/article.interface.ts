export interface ArticleInterface {
    author: {
        bio: string | null
        following: boolean
        image: string | null
        username: string
    }
    body: string
    createdAt: string
    description: string
    favorited: boolean
    favoritesCount: number
    slug: string
    tagList: string[]
    title: string
    updatedAt: string
}
