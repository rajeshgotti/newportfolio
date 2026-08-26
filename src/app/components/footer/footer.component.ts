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
    { label: 'Work', fragment: 'work' },
    { label: 'Contact', fragment: 'contact' }
  ];

  readonly socials = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajesh-gottimukkula' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/' },
    { icon: 'bi-envelope', label: 'Email', url: 'mailto:rajeshgottimukkula1996@gmail.com' },
    { icon: 'bi-telephone', label: 'Phone', url: 'tel:+918185031050' }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
