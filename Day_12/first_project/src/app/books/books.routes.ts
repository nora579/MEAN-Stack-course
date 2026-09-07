import { Routes } from '@angular/router';
import { Books } from './books';
import { Novels } from './novels/novels';
import { Educational } from './educational/educational';

export const booksRoutes: Routes = [

  {
    path: '',
    component: Books,
    title: 'Books'
  },

  {
    path: 'novels',
    loadComponent: () =>
      import('./novels/novels').then(m => m.Novels),
    title: 'Novels'
  },

  {
    path: 'educational',
    loadComponent: () =>
      import('./educational/educational').then(m => m.Educational),
    title: 'Educational',

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./educational/educational.routes')
            .then(m => m.educationalRoutes)
      }
    ]
  }

];