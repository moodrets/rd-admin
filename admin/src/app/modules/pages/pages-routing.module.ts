import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PagesComponent } from 'src/app/modules/pages/pages/pages.component'

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
    },
    {
        path: 'create',
        component: PagesComponent,
    },
    {
        path: 'update',
        component: PagesComponent,
    },
    {
        path: 'delete',
        component: PagesComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
