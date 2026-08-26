import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { RevealDirective } from '../../shared/reveal.directive';

type FilterKey = 'All' | 'Healthcare / EMR' | 'Full Stack';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  readonly filters: FilterKey[] = ['All', 'Healthcare / EMR', 'Full Stack'];
  activeFilter: FilterKey = 'All';
  activeProject: Project | null = null;

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Patient Registration & Encounter',
      category: 'Healthcare / EMR',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80',
      description:
        'Angular-based patient registration workflow for capturing demographics, insurance policies, nominee details, emergency contacts, authorisations and encounter information. Built dynamic Reactive Forms with cross-field validation and REST API integration for creating and managing patient records.',
      technologies: ['Angular 17', 'TypeScript', 'Reactive Forms', 'RxJS', 'REST API', 'Bootstrap'],
      client: 'Imperium Software — U.S. Healthcare Client',
      duration: 'Oct 2024 — Present',
      role: 'Angular Developer'
    },
    {
      id: 2,
      title: 'CPOE — Computerized Provider Order Entry',
      category: 'Healthcare / EMR',
      image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=900&q=80',
      description:
        'Developed and maintained Angular-based CPOE modules for managing clinical orders — medications, laboratory tests, procedures and other patient-care orders. Implemented role-based workflows, validations, autocomplete search and API integration used by physicians and nursing staff.',
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'Angular Material', 'REST API'],
      client: 'Imperium Software — U.S. Healthcare Client',
      duration: 'Ongoing',
      role: 'Angular Developer'
    },
    {
      id: 3,
      title: 'Medication Reconciliation & Vitals',
      category: 'Healthcare / EMR',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
      description:
        'Implemented Medication Reconciliation workflows and Vitals capture screens for nurses. Built reusable Angular components, form validations, dynamic tables and integrated APIs to save clinical data in real time.',
      technologies: ['Angular', 'Reactive Forms', 'RxJS', 'REST API', 'SCSS'],
      client: 'Imperium Software — U.S. Healthcare Client',
      duration: 'Ongoing',
      role: 'Angular Developer'
    },
    {
      id: 4,
      title: 'Clinical Reports & PDF Generation',
      category: 'Healthcare / EMR',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
      description:
        'Angular-based reporting modules for Patient, MAR, Laboratory, Radiology, Discharge and Audit reports. Implemented filtering, searching, pagination, data visualization and PDF report generation to support clinical and administrative workflows.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'HTML2PDF', 'REST API'],
      client: 'Imperium Software — U.S. Healthcare Client',
      duration: 'Ongoing',
      role: 'Angular Developer'
    },
    {
      id: 5,
      title: 'Nursing Station & Audit Log',
      category: 'Healthcare / EMR',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
      description:
        'Worked on the Nursing Station dashboard and Patient Audit Log modules — real-time patient lists, task assignments, alerts and audit trails for every clinical action. Implemented performance-friendly grids, filters and role-based visibility.',
      technologies: ['Angular', 'RxJS', 'Angular Material', 'REST API'],
      client: 'Imperium Software — U.S. Healthcare Client',
      duration: 'Ongoing',
      role: 'Angular Developer'
    },
    {
      id: 6,
      title: 'Student Management (Full Stack CRUD)',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      description:
        'Personal learning project — a Student Management application built with Angular + ASP.NET Core Web API + SQL Server. Implements full CRUD, Repository / Service pattern, stored procedures with EF Core and reactive-form driven UI. Built to strengthen my full-stack fundamentals.',
      technologies: ['Angular', 'ASP.NET Core Web API', 'C#', 'EF Core', 'SQL Server'],
      client: 'Personal Project (Learning)',
      duration: 'Ongoing',
      role: 'Full Stack Developer (Self-taught)'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === this.activeFilter);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setFilter(filter: FilterKey): void {
    this.activeFilter = filter;
  }

  openProject(project: Project): void {
    this.activeProject = project;
    this.document.body.classList.add('menu-open');
  }

  closeProject(): void {
    this.activeProject = null;
    this.document.body.classList.remove('menu-open');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeProject) {
      this.closeProject();
    }
  }
}
