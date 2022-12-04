import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fadeAnimation } from 'src/app/animations/fade.animations'

@Component({
    selector: 'admin-main-layout',
    templateUrl: './main-layout.component.html',
    animations: [fadeAnimation],
})
export class MainLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : ''
    }
}
