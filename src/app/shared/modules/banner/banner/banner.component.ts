import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'

@Component({
    selector: 'mc-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
    @Input() display: boolean
    constructor() {}

    ngOnInit(): void {}
}
