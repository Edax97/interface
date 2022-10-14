import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ProfileInterface } from '../modules/profile-info/types/profile.interface'

const url = environment.API

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) {}

    getProfile(username: string) {
        return this.http.get<{ profile: ProfileInterface }>(
            url + 'profiles/' + username
        )
    }

    onFollow(username: string, following: boolean) {
        return following ? this.unFollow(username) : this.follow(username)
    }

    follow(username: string) {
        return this.http.post<{ profile: ProfileInterface }>(
            url + 'profiles/' + username + '/follow',
            {}
        )
    }
    unFollow(username: string) {
        return this.http.delete<{ profile: ProfileInterface }>(
            url + 'profiles/' + username + '/follow'
        )
    }
}
