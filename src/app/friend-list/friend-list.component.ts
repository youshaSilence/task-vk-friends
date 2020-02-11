import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";
import {FriendListService} from "../friend-list.service";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  userName: string;
  friends: Friend[];

  constructor(private friendListService: FriendListService) { }

  getUserInfo(): void {
    this.friendListService.getUserInfo()
      .subscribe(data => this.userName = data['response'][0].first_name);
  }

  getFriendList(): void {
    this.friendListService.getFriendList()
      .subscribe(data => this.friends = data['response'].items);
  }

  ngOnInit() {
    this.getUserInfo();
    this.getFriendList();
  }
}
