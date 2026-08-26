import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly formspreeEndpoint = 'https://formspree.io/f/mjybnzze';

  submitted = false;
  sending = false;
  formSentSuccessfully = false;
  formSendError = false;

  readonly contactInfo = [
    { icon: 'bi-telephone', label: 'Call Me', value: '+91 81850 31050', href: 'tel:+918185031050' },
    { icon: 'bi-envelope', label: 'Email Me', value: 'rajeshgottimukkula1996@gmail.com', href: 'mailto:rajeshgottimukkula1996@gmail.com' },
    { icon: 'bi-geo-alt', label: 'Location', value: 'Hyderabad, Telangana — India', href: null }
  ];

  readonly socials = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajeshgottimukkula' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/rajeshgotti' },
    { icon: 'bi-envelope', label: 'Email', url: 'mailto:rajeshgottimukkula1996@gmail.com' },
    { icon: 'bi-telephone', label: 'Phone', url: 'tel:+918185031050' }
  ];

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.formSendError = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;

    this.http
      .post(this.formspreeEndpoint, this.form.value, {
        headers: { Accept: 'application/json' }
      })
      .subscribe({
        next: () => {
          this.sending = false;
          this.form.reset();
          this.submitted = false;
          this.formSentSuccessfully = true;

          setTimeout(() => {
            this.formSentSuccessfully = false;
          }, 5000);
        },
        error: () => {
          this.sending = false;
          this.formSendError = true;
        }
      });
  }
}
