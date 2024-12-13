import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const otentikasiGuard: CanActivateFn = (route, state) => {

  const id = inject(CookieService).get("userId");

  if(!id || id.length === 0){
    // belum login
    inject(Router).navigate(["/login"]);
    return false;
  }

  return true;
};
