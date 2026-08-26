import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Testimonial } from '../../models/testimonial.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  activeIndex = 0;

  readonly testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Product Director',
      company: 'Northwind Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
      quote:
        'Alex rebuilt our analytics dashboard from the ground up and cut load times dramatically. Communication was clear at every step and the final product exceeded what we scoped.',
      rating: 5
    },
    {
      name: 'Marcus Webb',
      role: 'Founder',
      company: 'Flowstate AI',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
      quote:
        'One of the few engineers who can move fast without breaking things. Alex owned the front-end architecture end-to-end and made decisions we still build on today.',
      rating: 5
    },
    {
      name: 'Priya Nair',
      role: 'Head of Design',
      company: 'Wander Co.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
      quote:
        'Working with Alex felt like having a design partner, not just a developer. Every interaction detail from our mockups made it into the final build, pixel for pixel.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Engineering Manager',
      company: 'Ledgerly',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80',
      quote:
        'Reliable, detail-oriented and great to work with under deadline pressure. Alex left our codebase noticeably cleaner than it started.',
      rating: 4
    }
  ];

  select(index: number): void {
    this.activeIndex = index;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
