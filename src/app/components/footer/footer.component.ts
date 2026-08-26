import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly links = [
    { label: 'Home', fragment: 'home' },
    { label: 'About', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Services', fragment: 'services' },
    { label: 'Work', fragment: 'work' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Contact', fragment: 'contact' }
  ];

  readonly socials = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajeshgottimukkula' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/rajeshgotti' },
    { icon: 'bi-envelope', label: 'Email', url: 'mailto:rajeshgottimukkula1996@gmail.com' },
    { icon: 'bi-telephone', label: 'Phone', url: 'tel:+918185031050' }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
