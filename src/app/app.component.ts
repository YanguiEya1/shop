import { Component, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isSidebarVisible: boolean = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  isLoggedIn: boolean = false;
  loggedInUserName: string | null = null;

  logout() {
    sessionStorage.clear(); // Clear user session
    location.reload();
  }

  title = 'authentication';
  isadmin = false;
  isvendor = false;
  isMenuVisible = true;

  constructor(private route: Router) {
    let role = sessionStorage.getItem('role');
    if (role == 'admin') {
      this.isadmin = true;
    }
    if (role == 'vendor') {
      this.isvendor = true;
    }
  }

  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role = sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if (role == 'admin') {
      this.isadmin = true;
    } else {
      this.isadmin = false;
    }

    if (role == 'vendor') {
      this.isvendor = true;
    } else {
      this.isvendor = false;
    }

    const username = sessionStorage.getItem('username');
    this.isLoggedIn = !!username; // Check if the user is logged in
    this.loggedInUserName = username; // Set the logged-in user's name
  }
}
