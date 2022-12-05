import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageFormComponent } from 'src/app/modules/pages/components/page-form/page-form.component'
import { PagesListComponent } from 'src/app/modules/pages/pages/pages-list/pages-list.component'

const routes: Routes = [
    {
        path: '',
        component: PagesListComponent,
    },
    {
        path: 'create',
        component: PageFormComponent,
        data: {
            actionType: 'create',
        },
    },
    {
        path: 'update',
        component: PageFormComponent,
        data: {
            actionType: 'update',
        },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
