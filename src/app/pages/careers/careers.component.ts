import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <section class="careers">
      <div class="container">
        <div class="careers-header">
          <h2>Join Our Team</h2>
          <p>Build your career with a company that values innovation and growth</p>
        </div>

        <div class="benefits">
          <h3>Why Work With Us</h3>
          <div class="benefits-grid">
            <div class="benefit-item">
              <h4>Flexible Work</h4>
              <p>Remote-first culture with flexible hours</p>
            </div>
            <div class="benefit-item">
              <h4>Health Benefits</h4>
              <p>Comprehensive health and dental coverage</p>
            </div>
            <div class="benefit-item">
              <h4>Learning Budget</h4>
              <p>Annual budget for courses and conferences</p>
            </div>
            <div class="benefit-item">
              <h4>Team Events</h4>
              <p>Regular team building and social events</p>
            </div>
          </div>
        </div>

        <div class="open-positions">
          <h3>Open Positions</h3>
          <div class="positions-grid">
            <mat-card>
              <h4>Senior Frontend Developer</h4>
              <p>Full-time • Remote</p>
              <mat-chip-set>
                <mat-chip>React</mat-chip>
                <mat-chip>TypeScript</mat-chip>
                <mat-chip>Angular</mat-chip>
              </mat-chip-set>
              <button mat-stroked-button color="primary">Apply Now</button>
            </mat-card>

            <mat-card>
              <h4>Backend Engineer</h4>
              <p>Full-time • Hybrid</p>
              <mat-chip-set>
                <mat-chip>Node.js</mat-chip>
                <mat-chip>Python</mat-chip>
                <mat-chip>AWS</mat-chip>
              </mat-chip-set>
              <button mat-stroked-button color="primary">Apply Now</button>
            </mat-card>

            <mat-card>
              <h4>UI/UX Designer</h4>
              <p>Full-time • Remote</p>
              <mat-chip-set>
                <mat-chip>Figma</mat-chip>
                <mat-chip>Adobe XD</mat-chip>
                <mat-chip>Sketch</mat-chip>
              </mat-chip-set>
              <button mat-stroked-button color="primary">Apply Now</button>
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .careers {
      padding: 4rem 0;
    }

    .careers-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .careers-header p {
      color: var(--gray-500);
      font-size: 1.25rem;
    }

    .benefits {
      margin-bottom: 4rem;
    }

    .benefits h3 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .benefit-item {
      text-align: center;
      padding: 2rem;
      background-color: var(--gray-100);
      border-radius: 8px;
    }

    .benefit-item h4 {
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .open-positions h3 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .positions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    mat-card {
      padding: 2rem;
    }

    mat-card h4 {
      margin-bottom: 0.5rem;
    }

    mat-card p {
      color: var(--gray-500);
      margin-bottom: 1rem;
    }

    mat-chip-set {
      margin-bottom: 1.5rem;
    }

    button {
      width: 100%;
    }
  `]
})
export class CareersComponent {}