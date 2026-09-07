import {Routes} from '@angular/router';
import {Engineering} from './engineering/engineering';
import {Programming} from './programming/programming';

export const educationalRoutes: Routes = [
    { path: 'engineering', component: Engineering },
    { path: 'programming', component: Programming }
];