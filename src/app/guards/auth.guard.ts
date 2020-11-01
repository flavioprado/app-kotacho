import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    debugger;
    if (this.authService.getUserToken()) {
      return true;
    } else if (this.authService.hasStoredToken()) {
      return true;
    } else {
      this.authService.logout();
      const url = '/login'
      this.router.navigate([url]);
    }
  }
}
