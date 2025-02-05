import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  template: `
    <section class="faq">
      <div class="container">
        <div class="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services</p>
        </div>

        <mat-accordion>
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                What services do you offer?
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>We offer a comprehensive range of digital services including web development, mobile app development, cloud solutions, and UI/UX design. Our team specializes in creating custom solutions tailored to your business needs.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                How long does a typical project take?
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>Project timelines vary depending on complexity and requirements. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during the project planning phase.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                Do you provide ongoing support?
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. Our team is available 24/7 for critical issues.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                What is your pricing model?
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>We offer flexible pricing models including fixed-price projects and time-and-materials arrangements. Each project is quoted based on its specific requirements and complexity.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                How do you ensure project quality?
              </mat-panel-title>
            </mat-expansion-panel-header>
            <p>We follow industry best practices and maintain strict quality control processes. This includes code reviews, automated testing, and regular client feedback sessions throughout the development process.</p>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </section>
  `,
  styles: [`
    .faq {
      padding: 4rem 0;
    }

    .faq-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .faq-header p {
      color: var(--gray-500);
      font-size: 1.25rem;
    }

    mat-accordion {
      max-width: 800px;
      margin: 0 auto;
    }

    mat-expansion-panel {
      margin-bottom: 1rem;
    }

    mat-panel-title {
      font-weight: 500;
    }

    p {
      color: var(--gray-500);
      line-height: 1.6;
    }
  `]
})
export class FaqComponent {}