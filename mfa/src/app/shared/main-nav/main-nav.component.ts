import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'mfa-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  constructor(private route: Router) {}
  currentTab = '';
  currentDate = new Date().toDateString();
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
        console.log(e.url);
      }
    });
  }
}
