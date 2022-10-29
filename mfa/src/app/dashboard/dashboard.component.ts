import { Component, OnInit } from '@angular/core';

import { AuthService } from '@nms/services';
import { IAccount } from '@nms/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  account: IAccount | undefined;

  constructor(private authService: AuthService) {
    this.authService.account.subscribe((account) => (this.account = account));
  }

  ngOnInit(): void {}
}
