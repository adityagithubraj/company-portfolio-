import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar class="header">
      <div class="container header-content">
        <a routerLink="/" class="logo">
          <img src="https://avatars.githubusercontent.com/u/112710746?s=400&u=dad522b272966e689d1d868075606277eea122b4&v=4" alt="Company Logo">
        </a>
        
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/services" routerLinkActive="active">Services</a>
          <a routerLink="/careers" routerLinkActive="active">Careers</a>
          <a routerLink="/blog" routerLinkActive="active">Blog</a>
          <a routerLink="/faq" routerLinkActive="active">FAQ</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

        <button mat-icon-button (click)="toggleMobileMenu()" class="mobile-menu-btn">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      background: var(--white);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    .logo img {
      height: 40px;
      width: auto;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary-color);
    }

    .mobile-menu-btn {
      display: none;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  toggleMobileMenu() {
    // Mobile menu toggle logic to be implemented
  }
}
