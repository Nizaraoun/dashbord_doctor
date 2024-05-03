// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { co } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== null) {
        console.log('Access token found');
      return true; // Allow navigation
    } else {
        console.log('Access token not found');
      this.router.navigate(['/login']); // Redirect to login page
      return false; // Block navigation
    }
  }
}
