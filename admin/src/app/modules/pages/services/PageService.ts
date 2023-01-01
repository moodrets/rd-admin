import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class PageService {
    public pagesList$: BehaviorSubject<[]> = new BehaviorSubject([])

    public async getById(): Promise<void> {}

    public async getList(): Promise<void> {}

    public async update(): Promise<void> {}

    public async delete(): Promise<void> {}
}
