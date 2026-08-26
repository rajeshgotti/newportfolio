import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy } from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  activeFragment = 'home';

  private scrollFrame: number | null = null;

  readonly links: NavLink[] = [
    { label: 'Home', fragment: 'home', icon: 'bi-house' },
    { label: 'About', fragment: 'about', icon: 'bi-person' },
    { label: 'Skills', fragment: 'skills', icon: 'bi-bar-chart' },
    { label: 'Services', fragment: 'services', icon: 'bi-briefcase' },
    { label: 'Work', fragment: 'work', icon: 'bi-grid' },
    { label: 'Experience', fragment: 'experience', icon: 'bi-mortarboard' },
    { label: 'Contact', fragment: 'contact', icon: 'bi-envelope' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollFrame !== null) {
      return;
    }
    this.scrollFrame = window.requestAnimationFrame(() => {
      this.isScrolled = window.scrollY > 40;
      this.updateActiveSection();
      this.scrollFrame = null;
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.document.body.classList.toggle('menu-open', this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.document.body.classList.remove('menu-open');
  }

  private updateActiveSection(): void {
    const scrollPos = window.scrollY + 160;
    for (let i = this.links.length - 1; i >= 0; i--) {
      const section = this.document.getElementById(this.links[i].fragment);
      if (section && section.offsetTop <= scrollPos) {
        this.activeFragment = this.links[i].fragment;
        return;
      }
    }
    this.activeFragment = 'home';
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('menu-open');
    if (this.scrollFrame !== null) {
      window.cancelAnimationFrame(this.scrollFrame);
    }
  }
}
