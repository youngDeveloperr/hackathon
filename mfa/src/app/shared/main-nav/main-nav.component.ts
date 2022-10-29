import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AuthService } from '@nms/services';
import { IAccount } from '@nms/types';

@Component({
  selector: 'mfa-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService) {}

  currentTab = '';
  currentDate = new Date().toDateString();
  account: IAccount | undefined = undefined;

  getNavTitle() {
    switch (this.currentTab) {
      case '/dashboard':
        return this.currentDate;
      case '/list':
        return 'Team';
      case '/health':
        return 'Mental Health';
    }
    return null;
  }

  ngOnInit(): void {
    this.currentTab = this.route.url;
    this.route.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentTab = e.url;
      }
    });

    this.authService.getLoggedUser();
    this.authService.account.subscribe((account) => {
      this.account = account;
    });
  }

  getAccountName() {
    return this.account?.name || '';
  }

  getAccountRole() {
    return this.account?.role || '';
  }
}
