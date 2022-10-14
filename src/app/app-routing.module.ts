import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/feed/articles',
        pathMatch: 'full',
    },

    {
        path: 'article/edit',
        loadChildren: () =>
            import('./edit-article/edit-article.module').then(
                (m) => m.EditArticleModule
            ),
    },

    {
        path: 'article',
        loadChildren: () =>
            import('./article/article.module').then((m) => m.ArticleModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
