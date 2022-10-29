import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IAccount } from '@nms/types';

const accounts: IAccount[] = [
  {
    email: 'bimal@nintriva.com',
    password: 'bimal',
    name: 'Bimal S',
    role: 'admin',
  },
  {
    email: 'sebin@nintrivalabs.com',
    password: 'sebin',
    name: 'Sebin Jose',
    role: 'user',
  },
];

const STORAGE_KEY = 'email';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentAccount$ = new BehaviorSubject<IAccount | undefined>(
    undefined
  );
  account = this.currentAccount$.asObservable();

  login(email: string, password: string) {
    const account = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (account) {
      localStorage.setItem(STORAGE_KEY, account.email);
    }

    this.currentAccount$.next(account);

    return !!account;
  }

  getLoggedUser() {
    const emailFromStorage = localStorage.getItem(STORAGE_KEY);

    if (!emailFromStorage) {
      return undefined;
    }

    const account = accounts.find(
      (account) => account.email === emailFromStorage
    );

    this.currentAccount$.next(account);
    return account;
  }
}
