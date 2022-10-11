import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

@Component({
    selector: 'mc-valid-errors',
    templateUrl: './valid-errors.component.html',
    styleUrls: ['./valid-errors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidErrorsComponent implements OnInit {
    @Input('errors') errorsProp: BackendErrorsInterface
    errors: string[] = []

    constructor() {}

    initializeValues() {
        const errorsTemp = []
        Object.entries(this.errorsProp).forEach(([field, messages]) => {
            messages.forEach((m) => errorsTemp.push(field + ' ' + m))
        })
        this.errors = errorsTemp
    }

    ngOnInit(): void {
        this.initializeValues()
    }
}
