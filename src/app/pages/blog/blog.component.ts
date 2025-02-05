import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <section class="blog">
      <div class="container">
        <div class="blog-header">
          <h2>Latest Insights</h2>
          <p>Stay updated with our latest thoughts on technology and innovation</p>
        </div>

        <div class="blog-grid">
          <mat-card>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog post">
            <div class="content">
              <mat-chip-set>
                <mat-chip>Technology</mat-chip>
                <mat-chip>Web Development</mat-chip>
              </mat-chip-set>
              <h3>The Future of Web Development in 2025</h3>
              <p>Exploring upcoming trends and technologies that will shape the future of web development...</p>
              <div class="meta">
                <span>John Doe</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <button mat-stroked-button color="primary">Read More</button>
            </div>
          </mat-card>

          <mat-card>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog post">
            <div class="content">
              <mat-chip-set>
                <mat-chip>AI</mat-chip>
                <mat-chip>Machine Learning</mat-chip>
              </mat-chip-set>
              <h3>AI in Modern Business Applications</h3>
              <p>How artificial intelligence is transforming the way businesses operate and make decisions...</p>
              <div class="meta">
                <span>Jane Smith</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <button mat-stroked-button color="primary">Read More</button>
            </div>
          </mat-card>

          <mat-card>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog post">
            <div class="content">
              <mat-chip-set>
                <mat-chip>Cloud</mat-chip>
                <mat-chip>DevOps</mat-chip>
              </mat-chip-set>
              <h3>Cloud Computing Best Practices</h3>
              <p>Essential guidelines for implementing and managing cloud infrastructure effectively...</p>
              <div class="meta">
                <span>Mike Johnson</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <button mat-stroked-button color="primary">Read More</button>
            </div>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog {
      padding: 4rem 0;
      background-color: var(--gray-100);
    }

    .blog-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .blog-header p {
      color: var(--gray-500);
      font-size: 1.25rem;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    mat-card {
      overflow: hidden;
    }

    mat-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .content {
      padding: 1.5rem;
    }

    mat-chip-set {
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    p {
      color: var(--gray-500);
      margin-bottom: 1rem;
    }

    .meta {
      display: flex;
      gap: 0.5rem;
      color: var(--gray-500);
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
    }
  `]
})
export class BlogComponent {}