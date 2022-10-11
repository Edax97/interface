import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class DateService {
    formatDate(dateString: string) {
        const date = new Date(Date.parse(dateString))
        return `${date.toLocaleDateString(undefined, {
            timeZone: 'UTC',
            month: 'short',
            day: '2-digit',
            year:
                date.getFullYear() == this.getCurrentYear()
                    ? undefined
                    : '2-digit',
        })}`
    }

    getCurrentYear() {
        const date = new Date()
        return date.getFullYear()
    }
}
