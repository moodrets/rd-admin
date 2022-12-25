import { Component, HostListener, OnInit } from '@angular/core'
import { OffcanvasService } from 'src/app/common/services/OffcanvasService'

@Component({
    selector: 'admin-offcanvas',
    templateUrl: './offcanvas.component.html',
    styleUrls: ['./offcanvas.component.scss'],
})
export class OffcanvasComponent implements OnInit {
    constructor(public readonly offcanvasService: OffcanvasService) {}

    @HostListener('click', ['$event'])
    public hostOnClick(event: Event): void {
        this.offcanvasService.hide()
    }

    ngOnInit(): void {}
}
