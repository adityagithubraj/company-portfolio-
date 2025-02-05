import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, FormsModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>CompanyName</h3>
            <p>Transforming ideas into digital reality.</p>
            <div class="social-links">
              <a href="#"><mat-icon>facebook</mat-icon></a>
              <a href="#"><mat-icon>twitter</mat-icon></a>
              <a href="#"><mat-icon>linkedin</mat-icon></a>
              <a href="#"><mat-icon>instagram</mat-icon></a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/careers">Careers</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a routerLink="/services">Web Development</a></li>
              <li><a routerLink="/services">Mobile Apps</a></li>
              <li><a routerLink="/services">Cloud Solutions</a></li>
              <li><a routerLink="/services">UI/UX Design</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" [(ngModel)]="email">
              <button mat-raised-button color="primary" (click)="subscribe()">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{currentYear}} CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--gray-100);
      padding: 4rem 0 2rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .footer-section h4 {
      margin-bottom: 1rem;
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: var(--primary-color);
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-links a {
      color: var(--text-color);
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: var(--primary-color);
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .newsletter-form input {
      padding: 0.5rem;
      border: 1px solid var(--gray-300);
      border-radius: 4px;
      flex: 1;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--gray-200);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  email: string = '';
  currentYear = new Date().getFullYear();

  subscribe() {
    // Newsletter subscription logic to be implemented
    console.log('Subscribe:', this.email);
  }
}