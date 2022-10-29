export interface IAccount {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}
