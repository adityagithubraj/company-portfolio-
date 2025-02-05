import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="about">
      <div class="container">
        <div class="about-header">
          <h2>About Us</h2>
          <p class="subtitle">Leading the way in digital transformation since 2010</p>
        </div>

        <div class="about-content">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team meeting">
          </div>
          <div class="about-text">
            <h3>Our Story</h3>
            <p>Founded in 2010, we've been at the forefront of digital innovation, helping businesses transform their operations and achieve unprecedented growth through technology.</p>
            
            <h3>Our Mission</h3>
            <p>To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.</p>
          </div>
        </div>

        <div class="team-section">
          <h3>Our Leadership Team</h3>
          <div class="team-grid">
            <mat-card>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="CEO">
              <h4>John Smith</h4>
              <p>CEO & Founder</p>
            </mat-card>
            <mat-card>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="CTO">
              <h4>Sarah Johnson</h4>
              <p>CTO</p>
            </mat-card>
            <mat-card>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="COO">
              <h4>Michael Brown</h4>
              <p>COO</p>
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 4rem 0;
    }

    .about-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .subtitle {
      font-size: 1.25rem;
      color: var(--gray-500);
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .about-image img {
      width: 100%;
      border-radius: 8px;
    }

    .about-text h3 {
      margin-bottom: 1rem;
    }

    .about-text p {
      margin-bottom: 2rem;
    }

    .team-section {
      text-align: center;
    }

    .team-section h3 {
      margin-bottom: 2rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    mat-card {
      padding: 1rem;
    }

    mat-card img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 1rem auto;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}