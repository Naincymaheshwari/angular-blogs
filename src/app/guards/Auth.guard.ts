import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { AuthService } from '../Service/Auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}


