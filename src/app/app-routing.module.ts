import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoadOnceGuard} from './core/guards/load-once.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro',
  },
  {
    path: 'intro',
    canLoad: [LoadOnceGuard],
    loadChildren: () => import('./pages/intro/routes').then(m => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/routes').then(m => m.routes),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/routes').then(m => m.routes),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
