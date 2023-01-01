import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from 'src/app/common/layouts/main-layout/main-layout.component'
import { LoginPageComponent } from 'src/app/common/pages/login-page/login-page.component'
import { MainPageComponent } from 'src/app/common/pages/main-page/main-page.component'
import { NotFoundPageComponent } from 'src/app/common/pages/not-found-page/not-found-page.component'

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: MainPageComponent,
            },
        ],
    },
    {
        path: 'pages',
        component: MainLayoutComponent,
        loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule),
    },
    { path: 'admin', pathMatch: 'full', component: LoginPageComponent },
    {
        path: '**',
        pathMatch: 'full',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: NotFoundPageComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
