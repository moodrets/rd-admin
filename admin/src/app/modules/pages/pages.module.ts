import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesRoutingModule } from 'src/app/modules/pages/pages-routing.module'
import { PagesComponent } from 'src/app/modules/pages/pages/pages.component'

@NgModule({
    declarations: [PagesComponent],
    imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
