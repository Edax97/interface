import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'

@Component({
    selector: 'mc-toggler',
    templateUrl: './toggler.component.html',
    styleUrls: ['./toggler.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TogglerComponent implements OnInit {
    @Input() page: string
    @Input() tag: string | null
    @Input() isLogged: boolean

    constructor() {}

    ngOnInit(): void {}
}
