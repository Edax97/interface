import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { ArticleFeedInterface } from '../../types/article-feed.interface'

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
    @Input() articles!: ArticleFeedInterface[]
    @Input() total!: number

    @Output() updatePage = new EventEmitter<{ offset: number; size: number }>()
    size = 10
    options = [5, 10, 25, 100]
    constructor() {}

    ngOnInit(): void {}

    updateFeed(pageEvent: PageEvent) {
        const { pageSize: size, pageIndex: index } = pageEvent
        this.updatePage.emit({ offset: size * index, size })
    }
}
