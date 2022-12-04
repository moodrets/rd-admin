import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
    selector: 'admin-page-form',
    templateUrl: './page-form.component.html',
    styleUrls: ['./page-form.component.scss'],
})
export class PageFormComponent implements OnInit {
    public routeData$?: Observable<Data>

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.routeData$ = this.route.data
    }

    public formSubmit(event: Event) {
        event.preventDefault()
    }
}
