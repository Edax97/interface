import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { filter, map, Observable, Subscription } from 'rxjs'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

@Component({
    selector: 'mc-valid-errors',
    templateUrl: './valid-errors.component.html',
    styleUrls: ['./valid-errors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidErrorsComponent implements OnInit {
    @Input('errors') errorsProp$: Observable<BackendErrorsInterface | null>
    errors$: Observable<string[]>

    constructor() {}

    initializeValues() {
        this.errors$ = this.errorsProp$.pipe(
            filter((e) => e != null),
            map((errorsProp) => {
                const errors = []
                Object.entries(errorsProp).forEach(([field, messages]) => {
                    console.log(field, messages)
                    messages.forEach((m) => errors.push(field + ' ' + m))
                })
                return errors
            })
        )
    }

    ngOnInit(): void {
        this.initializeValues()
    }
}
