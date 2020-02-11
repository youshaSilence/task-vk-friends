import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VkOauthService {
  urlParamsString: string;
  urlParams: string[];
  accessToken: string;
  userId: string;
  expiresIn: string;

  constructor() { }

  oauthVK() {
    window.open('https://oauth.vk.com/authorize?client_id=' +
      environment.vkClientId + '&display=page&redirect_uri=https://task-vk-friends.firebaseapp.com/&response_type=token');
  }

  saveCredentials() {
    this.urlParamsString = window.location.href.slice(window.location.href.indexOf('/#') + 2);
    this.urlParams = this.urlParamsString.split('&');
    this.accessToken = this.urlParams[0].split('=')[1];
    this.expiresIn = this.urlParams[1].split('=')[1];
    this.userId = this.urlParams[2].split('=')[1];
    localStorage.setItem('accessToken', this.accessToken);
    localStorage.setItem('expiresIn', this.expiresIn);
    localStorage.setItem('userId', this.userId);
  }

}
