import { Routes } from '@angular/router';
import { BirthdayWishComponent } from './birthday-wish/birthday-wish.component';

export const routes: Routes = [
    { path: 'home', component: BirthdayWishComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
