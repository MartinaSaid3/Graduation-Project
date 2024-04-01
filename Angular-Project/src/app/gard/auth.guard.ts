import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem('userToken') != null){
    return true;
  }else{
    router.navigateByUrl('/account/login');
    return false;
  }
}
