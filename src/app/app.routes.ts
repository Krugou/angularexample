import { Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { FeaturesPage } from './pages/features/features.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'about', component: AboutPage },
	{ path: 'features', component: FeaturesPage },
	{ path: 'contact', component: ContactPage },
	{ path: '**', redirectTo: '' },
];
