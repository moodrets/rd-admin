import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
    selector: 'admin-page-form',
    templateUrl: './page-form.component.html',
    styleUrls: ['./page-form.component.scss'],
})
export class PageFormComponent implements OnInit, AfterViewChecked {
    public routeData$?: Observable<Data>

    @ViewChild('firstInput', { read: ElementRef })
    public firstInput?: ElementRef

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.routeData$ = this.route.data
    }

    ngAfterViewChecked(): void {
        this.firstInput?.nativeElement.focus()
    }

    public formSubmit(event: Event) {
        event.preventDefault()
    }
}
