import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Service } from '../../models/skill.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      icon: 'bi-hexagon',
      title: 'Angular Application Development',
      description:
        'Building responsive, standalone-component Angular applications with clean architecture, lazy loading and reusable modules.'
    },
    {
      icon: 'bi-ui-checks-grid',
      title: 'Reactive Forms & Validation',
      description:
        'Complex Angular Reactive Forms with dynamic controls, cross-field validation and real-time user feedback for enterprise workflows.'
    },
    {
      icon: 'bi-hdd-network',
      title: 'REST API Integration',
      description:
        'End-to-end integration of REST APIs with Angular services, HTTP interceptors, error handling and RxJS operators for smooth data flow.'
    },
    {
      icon: 'bi-hospital',
      title: 'Healthcare / EMR Modules',
      description:
        'Domain experience in EMR / EHR systems — Patient Registration, CPOE, Medication Reconciliation, Vitals, Nursing Station and clinical reporting.'
    },
    {
      icon: 'bi-palette2',
      title: 'UI Components with Material & Bootstrap',
      description:
        'Reusable, accessible UI components using Angular Material and Bootstrap 5, designed to match consistent design systems.'
    },
    {
      icon: 'bi-file-earmark-pdf',
      title: 'Reports & PDF Generation',
      description:
        'Data tables, filtering, pagination and client-side PDF report generation for MAR, Discharge, Lab and Audit reports.'
    }
  ];
}
