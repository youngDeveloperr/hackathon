import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@nms/services';
import { IAccount } from '@nms/types';

@Component({
  selector: 'mfa-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  account: IAccount | undefined;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.account.subscribe((account) => (this.account = account));
  }

  activeTab: string = '';
  adminSideNav = [
    {
      title: 'DashBoard',
      image: 'assets/images/dashboard.svg',
      path: '/dashboard',
    },
    {
      title: 'Team',
      image: 'assets/images/teams.svg',
      path: '/list',
    },
    {
      title: 'Vacations',
      image: 'assets/images/vacation.svg',
      path: '/vacation',
    },
    {
      title: 'Time Tracking',
      image: 'assets/images/time.svg',
      path: '/time',
    },
    {
      title: 'Reports',
      image: 'assets/images/reports.svg',
      path: '/reports',
    },
    {
      title: 'Calendar',
      image: 'assets/images/calendar.svg',
      path: '/calendar',
    },
    {
      title: 'Notification',
      image: 'assets/images/dash-mail.svg',
      path: '/notification',
    },
    {
      title: 'Mental Health',
      image: 'assets/images/health.svg',
      path: '/health',
    },
    {
      title: 'Settings',
      image: 'assets/images/settings.svg',
      path: '/settings',
    },
  ];
  userSideNav = [
    {
      title: 'DashBoard',
      image: 'assets/images/dashboard.svg',
      path: '/dashboard',
    },
    {
      title: 'Profile',
      image: 'assets/images/teams.svg',
      path: '/profile',
    },
    {
      title: 'Vacations',
      image: 'assets/images/vacation.svg',
      path: '/vacation',
    },
    {
      title: 'Time Tracking',
      image: 'assets/images/time.svg',
      path: '/time',
    },
    {
      title: 'Reports',
      image: 'assets/images/reports.svg',
      path: '/reports',
    },
    {
      title: 'Calendar',
      image: 'assets/images/calendar.svg',
      path: '/calendar',
    },
    {
      title: 'Notification',
      image: 'assets/images/dash-mail.svg',
      path: '/notification',
    },
    {
      title: 'Settings',
      image: 'assets/images/settings.svg',
      path: '/settings',
    },
  ];

  selectedNav(id: string) {
    this.activeTab = id;
    this.router.navigateByUrl(id);
  }

  ngOnInit(): void {}
}
