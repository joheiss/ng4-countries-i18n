import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {CountriesComponent} from './countries.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryListItemComponent} from './country-list-item/country-list-item.component';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {CountriesSearchComponent} from './countries-search/countries-search.component';
import {ZippyModule} from '../zippy/zippy.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ZippyModule
  ],
  declarations: [
    CountriesComponent,
    CountryListComponent,
    CountryListItemComponent,
    CountryDetailsComponent,
    CountriesSearchComponent
  ],
  providers: [
  ],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule {
}

