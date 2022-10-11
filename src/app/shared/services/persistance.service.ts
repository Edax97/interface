import { Injectable, OnInit } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class PersistanceService implements OnInit {
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }
    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            console.log('Couldnt retrieve data', e)
            return null
        }
    }
    delete(key: string): boolean {
        try {
            localStorage.removeItem(key)
            return true
        } catch (error) {
            return false
        }
    }
    ngOnInit(): void {}
}
