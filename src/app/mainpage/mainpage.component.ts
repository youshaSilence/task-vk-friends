import {Component, OnInit } from '@angular/core';
import { VkOauthService } from "../vk-oauth.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private oauthVkService: VkOauthService) { }

  oauthVk(): void {
    this.oauthVkService.oauthVK();
  }

  ngOnInit() {
  }

}
