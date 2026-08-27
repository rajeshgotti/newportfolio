import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly info: InfoItem[] = [
    { icon: 'bi-person-badge', label: 'Name', value: 'Rajesh Gottimukkula' },
    { icon: 'bi-briefcase', label: 'Role', value: 'Angular Developer' },
    { icon: 'bi-gear', label: 'Experience', value: '2 Years' },
    { icon: 'bi-check-circle', label: 'Availability', value: 'Immediate Joiner (Notice period completed on 31st Aug 2026)' },
    { icon: 'bi-geo-alt', label: 'Location', value: 'Hyderabad, India' },
    { icon: 'bi-telephone', label: 'Phone', value: '+91 81850 31050' },
    { icon: 'bi-envelope', label: 'Email', value: 'rajeshgottimukkula1996@gmail.com' }
  ];
}
