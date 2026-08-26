import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

/**
 * Adds the `.reveal` base class to the host element and toggles `.in-view`
 * once the element scrolls into the viewport, producing the fade/slide-in
 * feel used throughout the reference site.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') delayClass = '';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    host.classList.add('reveal');
    if (this.delayClass) {
      host.classList.add(this.delayClass);
    }

    if (typeof IntersectionObserver === 'undefined') {
      host.classList.add('in-view');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            host.classList.add('in-view');
            this.observer?.unobserve(host);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
