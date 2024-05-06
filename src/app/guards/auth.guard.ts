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
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== null) {
      return true; // Allow navigation
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false; // Block navigation
    }
  }
}
