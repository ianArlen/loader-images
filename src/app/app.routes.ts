import { Routes } from '@angular/router';
import { LoaderPage } from './loader/loader.page';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },
  { path: 'loader', component: LoaderPage },
  {
    path: 'end',
    loadComponent: () => import('./end/end.page').then(m => m.EndPage)
  }
];
