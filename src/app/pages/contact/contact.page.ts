import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact.page.html',
})
export class ContactPage {}
