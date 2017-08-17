import {Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {CountryDetailsComponent} from './countries/country-details/country-details.component';
import {ErrorComponent} from './error/error.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'countries/:id',
    component: CountryDetailsComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: '**',
    redirectTo: 'countries',
    pathMatch: 'full'
  }
];
