import { Injectable, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

@Injectable()
export class SubscriptionService implements OnDestroy {
    public subscription: Subscription[] = []

    ngOnDestroy(): void {
        this.subscription.forEach((sub) => sub.unsubscribe())
    }
}
