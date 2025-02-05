import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <section class="contact">
      <div class="container">
        <div class="contact-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <mat-card>
              <h3>Contact Information</h3>
              <div class="info-item">
                <mat-icon>location_on</mat-icon>
                <div>
                  <h4>Address</h4>
                  <p>123 Business Street<br>Tech City, TC 12345</p>
                </div>
              </div>
              <div class="info-item">
                <mat-icon>phone</mat-icon>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="info-item">
                <mat-icon>email</mat-icon>
                <div>
                  <h4>Email</h4>
                  <p></p>
                </div>
              </div>
              <div class="info-item">
                <mat-icon>schedule</mat-icon>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </mat-card>
          </div>

          <div class="contact-form">
            <mat-card>
              <h3>Send us a Message</h3>
              <form>
                <mat-form-field appearance="outline">
                  <mat-label>Name</mat-label>
                  <input matInput placeholder="Your name">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Email</mat-label>
                  <input matInput placeholder="Your email" type="email">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Subject</mat-label>
                  <input matInput placeholder="Message subject">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Message</mat-label>
                  <textarea matInput placeholder="Your message" rows="6"></textarea>
                </mat-form-field>

                <button mat-raised-button color="primary">Send Message</button>
              </form>
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 4rem 0;
      background-color: var(--gray-100);
    }

    .contact-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .contact-header p {
      color: var(--gray-500);
      font-size: 1.25rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
    }

    mat-card {
      padding: 2rem;
    }

    .contact-info h3,
    .contact-form h3 {
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .info-item:last-child {
      margin-bottom: 0;
    }

    .info-item mat-icon {
      color: var(--primary-color);
    }

    .info-item h4 {
      margin-bottom: 0.5rem;
    }

    .info-item p {
      color: var(--gray-500);
    }

    .contact-form form {
      display: flex;
      flex-direction: column;
    }

    mat-form-field {
      margin-bottom: 1rem;
    }

    button {
      align-self: flex-start;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}