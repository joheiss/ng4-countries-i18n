import {Component, OnInit} from '@angular/core';
import {Country, SearchCriteria} from './country';
import {CountriesService} from './countries.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'jo-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries$: Observable<Country[]>;
  count$: Observable<number>;
  selectedCountry: Country;
  searchCriteria: SearchCriteria;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.countries$ = this.service.filteredCountries$;
    this.count$ = this.service.filteredCountriesCount$;
    this.selectedCountry = this.service.currentCountry;
    this.searchCriteria = this.service.searchCriteria;
  }

  onSearch(criteria): void {
    this.service.searchCountries(criteria);
  }

  onSelected(country: Country): void {
    this.service.selectCountry(country);
  }
}
