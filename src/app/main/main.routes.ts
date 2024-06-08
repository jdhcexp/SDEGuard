import { Routes } from '@angular/router';
import { MainPage } from './main.page';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'rounds',
        loadComponent: () =>
          import('../rounds/rounds.page').then((m) => m.RoundsPage),
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('../tasks/tasks.page').then((m) => m.TasksPage),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('../news/news.page').then((m) => m.NewsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/main/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full',
  },
];
