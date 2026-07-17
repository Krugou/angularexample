import { Component } from '@angular/core';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './features.page.html',
})
export class FeaturesPage {
  readonly featureCards = [
    {
      title: 'Reusable UI Primitives',
      description: 'Buttons, cards, hero, navigation, and footer are structured for extension without rewrites.',
    },
    {
      title: 'Route-based Content',
      description: 'Dedicated Home, About, Features, and Contact views maintain clarity as the app grows.',
    },
    {
      title: 'GitHub Pages Compatibility',
      description: 'Hash-based routing avoids refresh issues while preserving deep-link access in static hosting.',
    },
    {
      title: 'Production Build Flow',
      description: 'A dedicated build command sets the correct base href for repository subpath deployment.',
    },
    {
      title: 'Tailwind Configuration',
      description: 'Content scanning is scoped to Angular templates and TypeScript files for minimal CSS output.',
    },
    {
      title: 'Type-Safe Angular',
      description: 'Strict defaults and focused standalone components encourage maintainable TypeScript patterns.',
    },
  ];
}
