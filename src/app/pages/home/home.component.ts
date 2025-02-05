import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <section class="hero">
      <div class="container">
        <h1>Transform Your Digital Presence</h1>
        <p class="hero-subtitle">Innovative solutions for modern businesses</p>
        <div class="cta-buttons">
          <button mat-raised-button color="primary">Get in Touch</button>
          <button mat-stroked-button>Explore Services</button>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose Us</h2>
        <div class="features-grid">
          <mat-card>
            <mat-icon>rocket_launch</mat-icon>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times without compromising quality</p>
          </mat-card>
          <mat-card>
            <mat-icon>security</mat-icon>
            <h3>Secure Solutions</h3>
            <p>Enterprise-grade security for your peace of mind</p>
          </mat-card>
          <mat-card>
            <mat-icon>support_agent</mat-icon>
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support and maintenance</p>
          </mat-card>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div class="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div class="stat-item">
            <h3>50+</h3>
            <p>Expert Developers</p>
          </div>
          <div class="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      text-align: center;
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      color: white;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      margin-top: 2rem;
      gap: 1rem;
      display: flex;
      justify-content: center;
    }

    .features {
      padding: 4rem 0;
      background-color: var(--gray-100);
    }

    .features h2 {
      text-align: center;
      margin-bottom: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    mat-card {
      padding: 2rem;
      text-align: center;
    }

    mat-icon {
      font-size: 2.5rem;
      height: 2.5rem;
      width: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .stats {
      padding: 4rem 0;
      background-color: var(--primary-color);
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .stat-item h3 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }
    }
  `]
})
export class HomeComponent {}