import { Component } from '@angular/core';
import { CardComponent } from '../../shared/ui/card/card.component';
import { HeroComponent } from '../../shared/ui/hero/hero.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, CardComponent],
  templateUrl: './home.page.html',
})
export class HomePage {
  readonly highlights = [
    {
      title: 'Modern Angular',
      description: 'Standalone components, concise routing, and strict TypeScript settings for maintainable growth.',
    },
    {
      title: 'Tailwind Utility Flow',
      description: 'Predictable utility classes and reusable UI primitives keep design and engineering aligned.',
    },
    {
      title: 'GitHub Pages Ready',
      description: 'Deployment workflow included with base-href handling and artifact publishing via GitHub Actions.',
    },
  ];
}
