import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: []
  },
  {
    path: 'https://thi-rodrigues.github.io/cond-notify-web/',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: []
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
    canActivate: []
  }
];
