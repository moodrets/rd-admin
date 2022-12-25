import { Component, OnInit } from '@angular/core'
import { OffcanvasService } from 'src/app/common/services/OffcanvasService'

@Component({
    selector: 'admin-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(public offcanvasService: OffcanvasService) {}

    ngOnInit(): void {}

    menuClickHandler(): void {
        this.offcanvasService.show()
    }
}
