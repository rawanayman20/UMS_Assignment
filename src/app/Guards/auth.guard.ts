import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const _Router = inject(Router)

  const token=localStorage.getItem('accessToken')

  if(token){
 return true;
  }
  else{
    _Router.navigate(['/auth'])
 return false;
  }
 
};
