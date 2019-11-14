import {Component, OnInit} from '@angular/core';
import { VkOauthService } from "./vk-oauth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'VK-Friends App';
  accessToken: string;
  isAuth = false;
  vkOauthService: VkOauthService;

  ngOnInit() {
    // Check if there is already authorization
    this.accessToken = localStorage.getItem('accessToken');
    if (this.accessToken && this.accessToken.length > 1) {
      this.isAuth = true;
    }
    // Try to get vk auth params from url and save them
    if (window.location.href.indexOf('access_token') >= 0) {
      this.vkOauthService = new VkOauthService();
      this.vkOauthService.saveCredentials();
      this.isAuth = true;
    }
  }
}
