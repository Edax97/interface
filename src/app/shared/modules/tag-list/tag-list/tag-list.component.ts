import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core'
import { Observable } from 'rxjs'

@Component({
    selector: 'mc-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    @Input('tags') tags$: Observable<string[]>
    @Input('tag') tag: string
    @Output() tagFeedE = new EventEmitter<string>()
    constructor() {}
    getTagFeed(t: string) {
        this.tagFeedE.emit(t)
    }
    ngOnInit(): void {}
}
