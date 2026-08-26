import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly roles = [
    'Angular Applications',
    'Reactive Forms & RxJS',
    'REST API Integrations',
    'Healthcare / EMR modules'
  ];

  readonly socials = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajesh-gottimukkula' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/' },
    { icon: 'bi-envelope', label: 'Email', url: 'mailto:rajeshgottimukkula1996@gmail.com' },
    { icon: 'bi-telephone', label: 'Phone', url: 'tel:+918185031050' }
  ];

  typedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];
    const speed = this.deleting ? 45 : 85;

    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText = current.slice(0, this.charIndex);
      this.charIndex++;
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText = current.slice(0, this.charIndex);
      this.charIndex--;
    }

    let pause = speed;

    if (!this.deleting && this.charIndex > current.length) {
      this.deleting = true;
      pause = 1400;
    } else if (this.deleting && this.charIndex < 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.charIndex = 0;
      pause = 400;
    }

    this.timer = setTimeout(() => this.tick(), pause);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
