import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  //if token in localStorage than return true
  if (authService.loggedIn()) {
    return true;
  }
  else{
    router.navigate(['/auth/sign-up']);
    return false;
  }
  return true;
};
