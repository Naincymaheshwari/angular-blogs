import { Component } from '@angular/core';
import { AuthService } from '../Service/Auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  isUserLoggedIn: boolean = false;
  userLoggedOut: boolean = false;
  name: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      this.name = window.localStorage.getItem('name')?.toString();
    }
  }

  logoutUser(): void {
    this.authService.userLoggedOut();
    window.location.reload();
  }
}
