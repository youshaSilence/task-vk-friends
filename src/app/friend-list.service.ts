import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor(private http: HttpClient) { }

  vkApiUrl = 'https://api.vk.com/method/';
  accessToken = localStorage.getItem('accessToken');
  userId = localStorage.getItem('userId');

  getUserInfo(): Observable<Object> {
    return this.http.jsonp(this.vkApiUrl + 'users.get?user_ids=' + this.userId +
      '&fields=first_name&access_token=' + this.accessToken + '&v=5.103', 'callback')
  }

  getFriendList(): Observable<Object> {
    return this.http.jsonp(this.vkApiUrl + 'friends.get?user_ids=' + this.userId +
      '&fields=first_name&count=5&access_token=' + this.accessToken + '&v=5.103', 'callback')
  }

}
