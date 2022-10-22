import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoadOnceGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return this.canAccessRoute();
  }

  canActivateChild(): boolean {
    return this.canAccessRoute();
  }

  canLoad(): boolean {
    return this.canAccessRoute();
  }

  canAccessRoute(): boolean {
    if (introDataLocal()) {
      this.router.navigate(['/home/tab1']).then();
      return false;
    }
    return true;
  }
}

function introDataLocal(): boolean {
  const localState = localStorage.getItem('ion_intro_tutorial_finished');
  return !!localState;
}
