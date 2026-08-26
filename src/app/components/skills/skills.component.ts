import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { StatItem } from '../../models/experience.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection?: ElementRef<HTMLElement>;

  readonly skills: Skill[] = [
    { name: 'Angular (v14 – v17)', level: 88, icon: 'bi-hexagon' },
    { name: 'TypeScript', level: 85, icon: 'bi-code-slash' },
    { name: 'JavaScript (ES6+)', level: 85, icon: 'bi-filetype-js' },
    { name: 'HTML5 & CSS3 / SCSS', level: 88, icon: 'bi-brush' },
    { name: 'Reactive Forms & RxJS', level: 82, icon: 'bi-diagram-3' },
    { name: 'REST API Integration', level: 85, icon: 'bi-hdd-network' },
    { name: 'Bootstrap & Angular Material', level: 80, icon: 'bi-palette' },
    { name: 'Git & GitHub', level: 78, icon: 'bi-git' },
    { name: 'C# / ASP.NET Core (Learning)', level: 55, icon: 'bi-braces' },
    { name: 'SQL Server & EF Core (Learning)', level: 55, icon: 'bi-database' }
  ];

  readonly stats: StatItem[] = [
    { icon: 'bi-calendar3', value: 2, suffix: '+', label: 'Years Experience' },
    { icon: 'bi-hospital', value: 10, suffix: '+', label: 'EMR Modules Shipped' },
    { icon: 'bi-code-square', value: 40, suffix: '+', label: 'Reusable Components' },
    { icon: 'bi-cloud-check', value: 100, suffix: '+', label: 'REST APIs Integrated' }
  ];

  animatedValues: number[] = this.stats.map(() => 0);
  private hasAnimated = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.skillsSection?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      this.animatedValues = this.stats.map((s) => s.value);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(el);
  }

  private animateCounters(): void {
    const duration = 1400;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.animatedValues = this.stats.map((s) => Math.round(s.value * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
