import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceItem, ExperienceType } from '../../models/experience.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeTab: ExperienceType = 'work';

  readonly items: ExperienceItem[] = [
    {
      type: 'work',
      title: 'Angular Developer',
      period: 'Oct 2024 — Present',
      place: 'Imperium Software Pvt. Ltd. — Hyderabad',
      description:
        'Developing and maintaining a U.S.-based healthcare / EMR application used by physicians, nurses, pharmacists and HIM staff. Working across Patient Registration, CPOE, Medication Reconciliation, Vitals, Nursing Station and clinical Reports — building reusable Angular 17 components, Reactive Forms, RxJS-driven data flow and REST API integration. Actively collaborating with QA and backend teams for issue resolution.'
    },
    {
      type: 'education',
      title: 'B.Sc. (Mathematics, Statistics & Computer Science)',
      period: '2017',
      place: 'Narendra Degree College',
      description:
        'Bachelor of Science with a CGPA of 7.6 — covering mathematics, statistics and computer science fundamentals.'
    },
    {
      type: 'education',
      title: 'Full Stack .NET Developer Training',
      period: '8 Months (2023)',
      place: 'Sathya Technologies — Ameerpet, Hyderabad',
      description:
        'Comprehensive FULL-STACK training covering C#, ASP.NET Core, SQL Server, Angular and Web API — including hands-on CRUD projects, Repository / Service pattern and EF Core.'
    }
  ];

  get filteredItems(): ExperienceItem[] {
    return this.items.filter((item) => item.type === this.activeTab);
  }

  setTab(tab: ExperienceType): void {
    this.activeTab = tab;
  }
}
