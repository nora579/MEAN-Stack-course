import { Routes } from '@angular/router';
import { HomeComponent } from './home component/home.component';
import { AboutComponent } from './about-component/about-component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';
import { NotfoundComponent } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'books', loadChildren: () => import('./books/books.routes').then(m => m.booksRoutes) },
  { path: '**', component: NotfoundComponent }
];
