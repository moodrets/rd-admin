import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class OffcanvasService {
    public visible: BehaviorSubject<boolean> = new BehaviorSubject(false)

    public show() {
        this.visible.next(true)
    }

    public hide() {
        this.visible.next(false)
    }
}
