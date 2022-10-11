import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core'

@Component({
    selector: 'mc-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    @Input() list: string[]
    @Input() tag: string = ''
    @Output() tagFeedE = new EventEmitter<string>()
    constructor() {}
    getTagFeed(t: string) {
        this.tagFeedE.emit(t)
    }
    ngOnInit(): void {}
}
