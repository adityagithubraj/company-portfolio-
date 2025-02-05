import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <section class="services">
      <div class="container">
        <div class="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>

        <div class="services-grid">
          <mat-card>
            <mat-icon>computer</mat-icon>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with the latest technologies</p>
            <ul>
              <li>Responsive Design</li>
              <li>E-commerce Solutions</li>
              <li>Progressive Web Apps</li>
              <li>CMS Development</li>
            </ul>
            <button mat-stroked-button color="primary">Learn More</button>
          </mat-card>

          <mat-card>
            <mat-icon>phone_iphone</mat-icon>
            <h3>Mobile Development</h3>
            <p>Native and cross-platform mobile applications</p>
            <ul>
              <li>iOS Development</li>
              <li>Android Development</li>
              <li>React Native Apps</li>
              <li>Flutter Applications</li>
            </ul>
            <button mat-stroked-button color="primary">Learn More</button>
          </mat-card>

          <mat-card>
            <mat-icon>cloud</mat-icon>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and services</p>
            <ul>
              <li>Cloud Migration</li>
              <li>AWS Services</li>
              <li>Azure Solutions</li>
              <li>Cloud Security</li>
            </ul>
            <button mat-stroked-button color="primary">Learn More</button>
          </mat-card>

          <mat-card>
            <mat-icon>brush</mat-icon>
            <h3>UI/UX Design</h3>
            <p>User-centered design solutions</p>
            <ul>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
            <button mat-stroked-button color="primary">Learn More</button>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 4rem 0;
      background-color: var(--gray-100);
    }

    .services-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .services-header p {
      color: var(--gray-500);
      font-size: 1.25rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    mat-card {
      padding: 2rem;
      text-align: center;
    }

    mat-icon {
      font-size: 3rem;
      height: 3rem;
      width: 3rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    mat-card h3 {
      margin-bottom: 1rem;
    }

    mat-card p {
      margin-bottom: 1.5rem;
      color: var(--gray-500);
    }

    mat-card ul {
      list-style: none;
      margin-bottom: 1.5rem;
      text-align: left;
      padding-left: 1rem;
    }

    mat-card ul li {
      margin-bottom: 0.5rem;
      position: relative;
    }

    mat-card ul li:before {
      content: "•";
      color: var(--primary-color);
      position: absolute;
      left: -1rem;
    }
  `]
})
export class ServicesComponent {}