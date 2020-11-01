import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  isLogedIn() {
    return this.authService.hasStoredToken();
  }

  logout() {
    return this.authService.logoutAndRedirect();
  }

}
