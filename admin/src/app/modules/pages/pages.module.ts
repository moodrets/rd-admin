import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesRoutingModule } from 'src/app/modules/pages/pages-routing.module'
import { PageFormComponent } from './components/page-form/page-form.component'
import { PagesListComponent } from 'src/app/modules/pages/pages/pages-list/pages-list.component'

@NgModule({
    declarations: [PagesListComponent, PageFormComponent],
    imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
