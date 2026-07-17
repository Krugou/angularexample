import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly href = input<string>('');
  readonly variant = input<'primary' | 'secondary'>('primary');
}
