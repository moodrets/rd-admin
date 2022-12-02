import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component'
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'
import { NotFoundPageComponent } from 'src/app/pages/not-found-page/not-found-page.component'
import { PagesComponent } from 'src/app/pages/pages/pages.component'

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'pages',
                component: PagesComponent,
            },
        ],
    },
    { path: 'login', component: LoginPageComponent },
    { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
