import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'logo',
    loadComponent: () => import('./pages/logo-creator/logo-creator.component').then(m => m.LogoCreatorComponent),
  },
  {
    path: 'flyer',
    loadComponent: () => import('./pages/flyer-creator/flyer-creator.component').then(m => m.FlyerCreatorComponent),
  },
  {
    path: '',
    redirectTo: 'flyer',
    pathMatch: 'full',
  }
];
