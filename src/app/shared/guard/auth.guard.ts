import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.loggedIn()) {
    return true;
  } else {
    router.navigate(['/auth/sign-in']);
    return false;
  }
  return true;
};
